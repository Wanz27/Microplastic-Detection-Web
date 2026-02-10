import Header from '../components/header';

export default function Analytics({onMenuClick, darkMode, setDarkMode}) {
    return (
        <div className='analytic-layout'>
                    <Header
                        title="Analytics"
                        onMenuClick={onMenuClick}
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />
        </div>
    )
}