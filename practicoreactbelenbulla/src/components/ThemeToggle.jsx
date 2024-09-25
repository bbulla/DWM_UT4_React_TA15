import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useThemeContext();

    return (
        <button onClick={toggleTheme}>
            Cambiar a {theme === 'light' ? 'Oscuro' : 'Claro'}
        </button>
    );
};

export default ThemeToggle;
