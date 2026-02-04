import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';

import Dashboard from './pages/Dashboard';
import Detection from './pages/Detection';
import Samples from './pages/Samples';
import Analytics from './pages/Analytics';
import MyTrash from './pages/MyTrash';
import Setting from './pages/Setting';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/detection" element={<Detection />} />
            <Route path="/samples" element={<Samples />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/mytrash" element={<MyTrash />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
