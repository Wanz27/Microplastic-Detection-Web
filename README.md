## Setup Backend (FastAPI + ML)

### Windows
```bash
cd machine-learning-be
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```
### Mac
```bash
cd machine-learning-be
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
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
cd repo
npm install
npm run dev
```
