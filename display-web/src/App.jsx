import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DashboardLayout from './layouts/DashboardLayout';

import Dashboard from './pages/Dashboard';
import Detection from './pages/Detection';
import Samples from './pages/Samples';
import Analytics from './pages/Analytics';
import MyTrash from './pages/MyTrash';
import Setting from './pages/Setting';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/detection" element={<Detection />} />
          <Route path="/samples" element={<Samples />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/mytrash" element={<MyTrash />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
