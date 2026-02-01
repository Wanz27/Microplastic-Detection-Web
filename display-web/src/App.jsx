import React, { useState } from 'react';
import axios from 'axios';
import { Upload, Microscope, BarChart3, CheckCircle2, AlertCircle } from 'lucide-react';

function App() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setResult(null);
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
    <div style={styles.container}>
      <header style={styles.header}>
        <Microscope size={32} color="#3b82f6" />
        <h1>MicroPlastic <span style={{color: '#3b82f6'}}>Analyzer</span></h1>
      </header>

      <main style={styles.main}>
        {/* Kolom Kiri: Upload & Preview */}
        <section style={styles.card}>
          <div style={styles.uploadArea}>
            <input type="file" onChange={handleFileChange} id="fileInput" hidden />
            <label htmlFor="fileInput" style={styles.dropZone}>
              <Upload size={40} />
              <p>{file ? file.name : "Klik untuk pilih gambar mikroskop"}</p>
            </label>
          </div>

          {preview && (
            <div style={styles.previewContainer}>
              <h3 style={styles.h3}>Preview Input:</h3>
              <img src={preview} alt="Input" style={styles.image} />
              <button 
                onClick={uploadImage} 
                disabled={loading} 
                style={styles.button}
              >
                {loading ? "Menganalisis..." : "Mulai Deteksi AI"}
              </button>
            </div>
          )}
        </section>

        {/* Kolom Kanan: Hasil Deteksi */}
        <section style={styles.card}>
          {!result ? (
            <div style={styles.emptyState}>
              <BarChart3 size={48} color="#cbd5e1" />
              <p>Hasil analisis akan muncul di sini</p>
            </div>
          ) : (
            <div style={styles.resultContent}>
              <div style={styles.badgeContainer}>
                {Object.entries(result.summary).map(([key, val]) => (
                  <div key={key} style={styles.statBadge}>
                    <span style={styles.badgeLabel}>{key}</span>
                    <span style={styles.badgeVal}>{val}</span>
                  </div>
                ))}
              </div>
              
              <div style={styles.imageResultWrapper}>
                <h3 style={styles.h3}>Visualisasi Hasil AI:</h3>
                <img 
                  src={`data:image/jpeg;base64,${result.image_base64}`} 
                  alt="Result" 
                  style={styles.imageResult} 
                />
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

// Styling Sederhana (Inline untuk kemudahan copy-paste)
const styles = {
  container: { backgroundColor: '#6fb5fb', minHeight: '100vh', padding: '2rem', fontFamily: 'Inter, sans-serif' },
  header: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem' },
  main: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' },
  card: { background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
  dropZone: { border: '2px dashed #002d63', padding: '2rem', borderRadius: '8px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', color: '#3b82f6' },
  previewContainer: { marginTop: '1.5rem' },
  image: { width: '100%', borderRadius: '8px', maxHeight: '300px', objectFit: 'contain' },
  button: { width: '100%', marginTop: '1rem', padding: '0.75rem', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' },
  emptyState: { height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#002d63' },
  statBadge: { backgroundColor: '#002d63', padding: '10px 15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px', border: '1px solid #dbeafe' },
  badgeLabel: { fontWeight: '600', textTransform: 'capitalize', color: '#ffffff' },
  badgeVal: { color: '#6fb5fb', fontWeight: 'bold' },
  imageResult: { width: '100%', borderRadius: '8px', border: '2px solid #3b82f6' },
  h3: {color: '#6fb5fb'}
};

export default App;