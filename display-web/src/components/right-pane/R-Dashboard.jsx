import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './R-Dashboard.css'

const R_Dashboard = () =>{
    return (
        <div className="right">
            <div className="top">
                <button id='menu-btn'>
                    <MenuIcon className='icon'/>
                </button>
                <div className="theme-toggler">
                    <LightModeIcon className='icon active' />
                    <DarkModeIcon className='icon' />
                </div>
                <div className="profile">
                    <div className="info">
                        <p>Halo, <b>Wanz</b></p>
                        <small className='text-muted'>Admin</small>
                    </div>
                    <div className="profile-photo">
                        <img src="./microscope.png"/>
                    </div>
                </div>
            </div>
            <div className="recent-updates">
                <h2>Recent Updates</h2>
                <div className="updates">
                    <div className="update">
                        <div className="profile-photo">
                            <img src="./microscope.png"/>
                        </div>
                        <div className="message">
                            <p><b>Wawan</b> updated the Sungai A's Folder.</p>
                            <small className='text-muted'>2 Minutes Ago</small>
                        </div>
                    </div>
                    <div className="update">
                        <div className="profile-photo">
                            <img src="./microscope.png"/>
                        </div>
                        <div className="message">
                            <p><b>Wawan</b> updated the Sungai A's Folder.</p>
                            <small className='text-muted'>2 Minutes Ago</small>
                        </div>
                    </div>
                    <div className="update">
                        <div className="profile-photo">
                            <img src="./microscope.png"/>
                        </div>
                        <div className="message">
                            <p><b>Wawan</b> updated the Sungai A's Folder.</p>
                            <small className='text-muted'>2 Minutes Ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default R_Dashboard;