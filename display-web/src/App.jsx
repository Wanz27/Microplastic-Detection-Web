import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";

import Navbar from './components/navbar';

import Dashboard from './pages/Dashboard';
import Detection from './pages/Detection';
import Samples from './pages/Samples';
import Analytics from './pages/Analytics';
import MyTrash from './pages/MyTrash';
import Setting from './pages/Setting';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
      return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
      if (darkMode) {
          document.body.classList.add('dark-theme-variables');
          localStorage.setItem('theme', 'dark');
      } else {
          document.body.classList.remove('dark-theme-variables');
          localStorage.setItem('theme', 'light');
      }
  }, [darkMode]);
  
  return (
    <Router>
      <div className="web-layout">
        <Navbar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard onMenuClick={() => setSidebarOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/detection" element={<Detection onMenuClick={() => setSidebarOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/samples" element={<Samples onMenuClick={() => setSidebarOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/analytics" element={<Analytics onMenuClick={() => setSidebarOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/mytrash" element={<MyTrash onMenuClick={() => setSidebarOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/setting" element={<Setting onMenuClick={() => setSidebarOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
