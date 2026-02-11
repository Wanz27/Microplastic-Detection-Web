import Header from '../components/header';
import './Samples.css';

export default function Samples({ onMenuClick, darkMode, setDarkMode }) {
    return (
        <div className='smp-layout-container'>
            <Header
                title="Samples"
                onMenuClick={onMenuClick}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <main className="smp-main-wrapper">
                <aside className="smp-sidebar-filter">
                    <div className="smp-filter-group">
                        <label className="smp-label">Name</label>
                        <select className="smp-select">
                            <option>All Names</option>
                        </select>
                    </div>
                    <div className="smp-filter-group">
                        <label className="smp-label">Types</label>
                        <select className="smp-select">
                            <option>All Types</option>
                        </select>
                    </div>
                    <div className="smp-filter-group">
                        <label className="smp-label">Status</label>
                        <select className="smp-select">
                            <option>All Status</option>
                        </select>
                    </div>
                </aside>

                <section className="smp-table-content">
                    <div className="smp-table-header-flex">
                        <div className="smp-search-wrapper">
                            <input 
                                type="text" 
                                placeholder="Search samples..." 
                                className="smp-input-search" 
                            />
                        </div>
                        <div className="smp-action-buttons">
                            <button className="smp-btn smp-btn-add">Add Sample</button>
                            <button className="smp-btn smp-btn-export">Export</button>
                        </div>
                    </div>

                    <div className="smp-table-scroll">
                        <table className="smp-custom-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Sample Name</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>Date Added</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {/* <td colSpan="5" className="smp-td-empty">No data found</td> */}
                                    <td>#1234</td>
                                    <td>Sampel Sungai A</td>
                                    <td>Publik</td>
                                    <td className='success'>Sukses</td>
                                    <td className='primary'>12/2/26</td>
                                </tr>
                                <tr>
                                    <td>#1234</td>
                                    <td>Sampel Sungai A</td>
                                    <td>Publik</td>
                                    <td className='success'>Sukses</td>
                                    <td className='primary'>12/2/26</td>
                                </tr>
                                <tr>
                                    <td>#1234</td>
                                    <td>Sampel Sungai A</td>
                                    <td>Publik</td>
                                    <td className='success'>Sukses</td>
                                    <td className='primary'>12/2/26</td>
                                </tr>
                                <tr>
                                    <td>#1234</td>
                                    <td>Sampel Sungai A</td>
                                    <td>Publik</td>
                                    <td className='success'>Sukses</td>
                                    <td className='primary'>12/2/26</td>
                                </tr>
                                <tr>
                                    <td>#1234</td>
                                    <td>Sampel Sungai A</td>
                                    <td>Publik</td>
                                    <td className='success'>Sukses</td>
                                    <td className='primary'>12/2/26</td>
                                </tr>
                                <tr>
                                    <td>#1234</td>
                                    <td>Sampel Sungai A</td>
                                    <td>Publik</td>
                                    <td className='success'>Sukses</td>
                                    <td className='primary'>12/2/26</td>
                                </tr>
                                <tr>
                                    <td>#1234</td>
                                    <td>Sampel Sungai A</td>
                                    <td>Publik</td>
                                    <td className='success'>Sukses</td>
                                    <td className='primary'>12/2/26</td>
                                </tr>
                                <tr>
                                    <td>#1234</td>
                                    <td>Sampel Sungai A</td>
                                    <td>Publik</td>
                                    <td className='success'>Sukses</td>
                                    <td className='primary'>12/2/26</td>
                                </tr>
                                <tr>
                                    <td>#1234</td>
                                    <td>Sampel Sungai A</td>
                                    <td>Publik</td>
                                    <td className='success'>Sukses</td>
                                    <td className='primary'>12/2/26</td>
                                </tr>
                                <tr>
                                    <td>#1234</td>
                                    <td>Sampel Sungai A</td>
                                    <td>Publik</td>
                                    <td className='success'>Sukses</td>
                                    <td className='primary'>12/2/26</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>

            <footer className="smp-footer-pagination">
                <div className="smp-pagination-box">
                    <button className="smp-page-btn">Previous</button>
                    <span className="smp-page-info">Page 1 of 1</span>
                    <button className="smp-page-btn">Next</button>
                </div>
            </footer>
        </div>
    );
}