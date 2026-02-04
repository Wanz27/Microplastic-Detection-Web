import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import R_Dashboard from '../components/right-pane/R-Dashboard';

function DashboardLayout() {
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
        <R_Dashboard/>
      </aside>
    </div>
  );
}

export default DashboardLayout;
