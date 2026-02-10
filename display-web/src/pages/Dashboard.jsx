import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './Dashboard.css';

export default function Dashboard({ onMenuClick, darkMode, setDarkMode }) {

    return (
        <div className='dashboard-layout'>
            <div className="dashboard-header">
                <h1>Dashboard</h1>
                <div className="header-right">
                    <button id='menu-btn' onClick={onMenuClick}>
                        <MenuIcon className='icon'/>
                    </button>

                    <div className="theme-toggler" onClick={() => setDarkMode(prev => !prev)}>
                        <LightModeIcon className={`icon ${!darkMode ? 'active' : ''}`} />
                        <DarkModeIcon className={`icon ${darkMode ? 'active' : ''}`} />
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
            </div>
            <main>
                <div className="date">
                    <input type="date" />
                </div>

                <div className="insights">
                    {/* ----------COLUMN 1---------- */}
                    <div className="projects">
                        <AccountTreeIcon className='icon'/>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Projects</h3>
                                <h1>50</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx='38' cy='38' r='36'></circle>
                                </svg>
                                <div className="number">
                                    <p>50%</p>
                                </div>
                            </div>
                        </div>
                        <small className='text-muted'>Last 24 Hours</small>
                    </div>
                    {/* ----------COLUMN 2---------- */}
                    <div className="samples">
                        <AnalyticsIcon className='icon'/>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Samples</h3>
                                <h1>150</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx='38' cy='38' r='36'></circle>
                                </svg>
                                <div className="number">
                                    <p>50%</p>
                                </div>
                            </div>
                        </div>
                        <small className='text-muted'>Last 24 Hours</small>
                    </div>
                    {/* ----------COLUMN 3---------- */}
                    <div className="reports">
                        <AssignmentIcon className='icon'/>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Reports</h3>
                                <h1>20</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx='38' cy='38' r='36'></circle>
                                </svg>
                                <div className="number">
                                    <p>50%</p>
                                </div>
                            </div>
                        </div>
                        <small className='text-muted'>Last 24 Hours</small>
                    </div>
                </div>
                {/* ----------TABLE SECTION---------- */}
                <div className="recent-activities">
                    <h2>Recent Activities</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Activity Name</th>
                                <th>Folder</th>
                                <th>Status</th>
                                <th>Progress</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Penambahan sampel air tawar</td>
                                <td>Sampel Sungai A</td>
                                <td>Publik</td>
                                <td className='success'>Sukses</td>
                                <td className='primary'>Details</td>
                            </tr>
                            <tr>
                                <td>Penambahan sampel air tawar</td>
                                <td>Sampel Sungai A</td>
                                <td>Publik</td>
                                <td className='success'>Sukses</td>
                                <td className='primary'>Details</td>
                            </tr>
                            <tr>
                                <td>Penambahan sampel air tawar</td>
                                <td>Sampel Sungai A</td>
                                <td>Publik</td>
                                <td className='success'>Sukses</td>
                                <td className='primary'>Details</td>
                            </tr>
                            <tr>
                                <td>Penambahan sampel air tawar</td>
                                <td>Sampel Sungai A</td>
                                <td>Publik</td>
                                <td className='success'>Sukses</td>
                                <td className='primary'>Details</td>
                            </tr>
                            <tr>
                                <td>Penambahan sampel air tawar</td>
                                <td>Sampel Sungai A</td>
                                <td>Publik</td>
                                <td className='success'>Sukses</td>
                                <td className='primary'>Details</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="#">Show All</a>
                </div>
            </main>
            <div className="right">
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
        </div>
    )
}