import Header from '../components/header';

export default function Samples({onMenuClick, darkMode, setDarkMode}) {
    return (
        <div className='sample-layout'>
                    <Header
                        title="Samples"
                        onMenuClick={onMenuClick}
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />
        </div>
    )
}