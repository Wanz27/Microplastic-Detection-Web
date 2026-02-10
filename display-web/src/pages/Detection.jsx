import React, { useState } from 'react';
import axios from 'axios';
import { Upload, Microscope, BarChart3 } from 'lucide-react';
import './Detection.css';
import Header from '../components/header';

export default function Detection({onMenuClick, darkMode, setDarkMode}) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setResult(null);
    }
  };

  const uploadImage = async () => {
    if (!file) return;
    setLoading(true);
    
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8000/detect', formData);
      setResult(response.data);
    } catch (error) {
      console.error("Error uploading file", error);
      alert("Gagal terhubung ke API. Pastikan Backend sudah jalan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="detection-layout">
      <Header
        title="Quick Detection"
        onMenuClick={onMenuClick}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="main-content">
        {/* Kolom Kiri: Upload & Preview */}
        <section className="card">
          <div className="upload-area">
            <input type="file" onChange={handleFileChange} id="fileInput" hidden />
            <label htmlFor="fileInput" className="drop-zone">
              <Upload size={40} />
              <p>{file ? file.name : "Klik untuk pilih gambar mikroskop"}</p>
            </label>
          </div>

          {preview && (
            <div className="preview-container">
              <h3 className="title-blue">Preview Input:</h3>
              <img src={preview} alt="Input" className="image-preview" />
              <button 
                onClick={uploadImage} 
                disabled={loading} 
                className="btn-detect"
              >
                {loading ? "Menganalisis..." : "Mulai Deteksi AI"}
              </button>
            </div>
          )}
        </section>

        {/* Kolom Kanan: Hasil Deteksi */}
        <section className="card">
          {!result ? (
            <div className="empty-state">
              <BarChart3 size={48} color="#cbd5e1" />
              <p>Hasil analisis akan muncul di sini</p>
            </div>
          ) : (
            <div className="result-content">
              <div className="badge-container">
                {Object.entries(result.summary).map(([key, val]) => (
                  <div key={key} className="stat-badge">
                    <span className="badge-label">{key}</span>
                    <span className="badge-val">{val}</span>
                  </div>
                ))}
              </div>
              
              <div className="image-result-wrapper">
                <h3 className="title-blue">Visualisasi Hasil AI:</h3>
                <img 
                  src={`data:image/jpeg;base64,${result.image_base64}`} 
                  alt="Result" 
                  className="image-result" 
                />
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}