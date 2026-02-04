import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import R_Detection from '../components/right-pane/R-Dashboard';

function DetectionLayout() {
  return (
    <div className="app-layout">
      {/* kiri */}
      <aside className="aside">
        <Navbar />
      </aside>

      {/* tengah */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* kanan (dinamis) */}
      <aside className="right-pane">
        <R_Detection/>
      </aside>
    </div>
  );
}

export default DetectionLayout;