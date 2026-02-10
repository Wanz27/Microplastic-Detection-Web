import Header from '../components/header';

export default function Setting({onMenuClick, darkMode, setDarkMode}) {
    return (
        <div className='setting-layout'>
                    <Header
                        title="Setting"
                        onMenuClick={onMenuClick}
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />
        </div>
    )
}