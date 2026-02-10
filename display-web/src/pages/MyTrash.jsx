import Header from '../components/header';

export default function MyTrash({onMenuClick, darkMode, setDarkMode}) {
    return (
        <div className='trash-layout'>
                    <Header
                        title="My Trash"
                        onMenuClick={onMenuClick}
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />
        </div>
    )
}