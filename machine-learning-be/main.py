from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from ultralytics import YOLO
from fastapi.middleware.cors import CORSMiddleware
import io
from PIL import Image
import base64
import numpy as np

app = FastAPI()

model = YOLO("best.pt") 

def image_to_base64(img: Image.Image) -> str:
    buffered = io.BytesIO()
    img.save(buffered, format="JPEG")
    return base64.b64encode(buffered.getvalue()).decode('utf-8')

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/detect")
async def detect_microplastic(file: UploadFile = File(...)):
    # Baca gambar dari upload user
    image_data = await file.read()
    image = Image.open(io.BytesIO(image_data))

    # Prediksi (Inference)
    results = model.predict(image, conf=0.25) 
    result = results[0]

    # Ambil Statistik Deteksi
    detections = []
    class_counts = {}
    
    for box in result.boxes:
        class_id = int(box.cls[0])
        class_name = model.names[class_id]
        confidence = float(box.conf[0])

        class_counts[class_name] = class_counts.get(class_name, 0) + 1
        
        detections.append({
            "class": class_name,
            "confidence": round(confidence, 2)
        })

    res_plotted = result.plot() 
    res_image = Image.fromarray(res_plotted[..., ::-1]) 
    
    output_image_b64 = image_to_base64(res_image)

    return JSONResponse(content={
        "status": "success",
        "summary": class_counts,
        "detections": detections,
        "image_base64": output_image_b64
    })


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)