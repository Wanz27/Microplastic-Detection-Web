from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from ultralytics import YOLO
from fastapi.middleware.cors import CORSMiddleware
import io
from PIL import Image
import base64
import numpy as np

app = FastAPI()

# 1. Load Model Kamu (pastikan path file benar)
# Gunakan 'best.pt' yang kamu download
model = YOLO("best.pt") 

def image_to_base64(img: Image.Image) -> str:
    """Mengubah gambar PIL menjadi string base64 untuk dikirim ke frontend"""
    buffered = io.BytesIO()
    img.save(buffered, format="JPEG")
    return base64.b64encode(buffered.getvalue()).decode('utf-8')

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Di produksi, ganti dengan URL frontend kamu
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/detect")
async def detect_microplastic(file: UploadFile = File(...)):
    # 2. Baca gambar dari upload user
    image_data = await file.read()
    image = Image.open(io.BytesIO(image_data))

    # 3. Lakukan Prediksi (Inference)
    # conf=0.25 artinya hanya deteksi dengan keyakinan > 25%
    results = model.predict(image, conf=0.25) 
    result = results[0]

    # 4. Ambil Statistik Deteksi
    detections = []
    class_counts = {} # Untuk menghitung jumlah tiap jenis (Fiber, Film, dll)
    
    for box in result.boxes:
        class_id = int(box.cls[0])
        class_name = model.names[class_id]
        confidence = float(box.conf[0])
        
        # Hitung jumlah per kelas
        class_counts[class_name] = class_counts.get(class_name, 0) + 1
        
        detections.append({
            "class": class_name,
            "confidence": round(confidence, 2)
        })

    # 5. Render Gambar Hasil (Plotting box di gambar)
    # result.plot() mengembalikan numpy array (BGR), perlu ubah ke RGB untuk PIL
    res_plotted = result.plot() 
    res_image = Image.fromarray(res_plotted[..., ::-1]) # BGR to RGB
    
    # Encode gambar hasil ke Base64 agar bisa ditampilkan di browser
    output_image_b64 = image_to_base64(res_image)

    return JSONResponse(content={
        "status": "success",
        "summary": class_counts, # Contoh: {"fiber": 2, "fragment": 1}
        "detections": detections,
        "image_base64": output_image_b64 # Gambar yang sudah ada kotak deteksinya
    })

# ini jgn lupa hapus pas deploy ke render
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)