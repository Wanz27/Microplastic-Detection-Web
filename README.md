# MICROPLASTIC DETECTOR WEB

## Setup Backend (FastAPI + ML)

### Windows
```bashx
cd machine-learning-be
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
pip install fastapi uvicorn ultralytics python-multipart opencv-python pillow numpy
uvicorn main:app --reload
```
### Mac
```bash
cd machine-learning-be
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
pip install fastapi uvicorn ultralytics python-multipart opencv-python pillow numpy
uvicorn main:app --reload
```

## Setup Frontend

### Windows
```bash
cd display-web
npm i
npm run dev
```
### Mac
```bash
cd display-web
npm i
npm run dev
```

versi 1.9.4
Finalize use cases

https://docs.google.com/document/d/1-VlfYWlJW-aIlARt5-2w6XxJcnf8oksoaLBnCODA5Ho/edit?usp=sharing
