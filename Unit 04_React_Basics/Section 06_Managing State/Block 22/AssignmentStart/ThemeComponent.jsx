import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.jsx";


export default function ThemeComponent() {
    const [theme, setTheme] = useContext(ThemeContext);
    return (
        <div style={
            {
                background: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#000' : '#fff',
                padding: '20px'
            }}>
            <p>Current Theme: {theme}</p>
            <button onClick={() => setTheme(
                theme === 'light'
                    ? 'dark'
                    : 'light')}>
                Toggle Theme
            </button>
        </div>
    )
}