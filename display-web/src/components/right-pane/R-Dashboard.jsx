import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const R_Dashboard = () =>{
    return (
        <div className="right">
            <div className="top">
                <button id='menu-btn'>
                    <MenuIcon className='icon'/>
                </button>
                <div className="theme-toggler">
                    <LightModeIcon className='icon' />
                    <DarkModeIcon className='icon' />
                </div>
                <div className="profile">
                    <div className="info">
                        <p>Halo, <b>Wanz</b></p>
                        <small className='text-muted'>Admin</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default R_Dashboard;