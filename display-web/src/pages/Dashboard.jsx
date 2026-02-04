import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AssignmentIcon from '@mui/icons-material/Assignment';
import './Dashboard.css';

export default function Dashboard() {

    return (
        <main>
            <h1>Dashboard</h1>

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
                            <h3>Total Report Creates</h3>
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
    )
}