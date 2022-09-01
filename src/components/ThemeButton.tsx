import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeButton = () => {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <button type="button" style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>Click Me</button>
            <button type="button" style={{ backgroundColor: theme.secondary.main, color: theme.secondary.text }}>Click Me</button>
        </div>
    )
}

export default ThemeButton