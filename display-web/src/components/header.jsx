import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './header.css';

export default function Header({
  title,
  onMenuClick,
  darkMode,
  setDarkMode
}) {
  return (
    <div className="dashboard-header">
      <h1>{title}</h1>

      <div className="header-right">
        <button id="menu-btn" onClick={onMenuClick}>
          <MenuIcon className="icon" />
        </button>

        <div
          className="theme-toggler"
          onClick={() => setDarkMode(prev => !prev)}
        >
          <LightModeIcon className={`icon ${!darkMode ? 'active' : ''}`} />
          <DarkModeIcon className={`icon ${darkMode ? 'active' : ''}`} />
        </div>

        <div className="profile">
          <div className="info">
            <p>Halo, <b>Wanz</b></p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="profile-photo">
            <img src="./microscope.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
