import { NavLink } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import FolderIcon from '@mui/icons-material/Folder';
import BarChartIcon from '@mui/icons-material/BarChart';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import './navbar.css';

const Navbar = ({ isOpen, onClose }) =>{
    return (
        <aside className={isOpen ? "active" : ""}>
            <div className="top">
                <div className="logo">
                    <img src="/microscope.png"/>
                    <h2>MICROPLASTIC</h2>
                </div>
                <div className="close" id="close-btn" onClick={onClose}>
                    <CloseIcon className='icon'/>
                </div>
            </div>

            <div className="sidebar">
                <NavLink to="/" end>
                    <DashboardIcon className='icon'/>
                    <h3>Dashboard</h3>
                </NavLink>
                <NavLink to="/detection">
                    <ImageSearchIcon className='icon'/>
                    <h3>Quick Detection</h3>
                </NavLink>
                <NavLink to="/samples">
                    <FolderIcon className='icon'/>
                    <h3>Samples</h3>
                </NavLink>
                <NavLink to="/analytics">
                    <BarChartIcon className='icon'/>
                    <h3>Analytics</h3>
                </NavLink>
                <NavLink to="/mytrash">
                    <DeleteIcon className='icon'/>
                    <h3>My Trash</h3>
                </NavLink>
                <NavLink to="/setting">
                    <SettingsIcon className='icon'/>
                    <h3>Setting</h3>
                </NavLink>
                <a href="#">
                    <LogoutIcon className='icon'/>
                    <h3>Logout</h3>
                </a>
            </div>
        </aside>
    )
}

export default Navbar;