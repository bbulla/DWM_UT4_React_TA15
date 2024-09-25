import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

const CurrentTheme = () => {
    const { theme } = useThemeContext();

    return <h2>Tema actual: {theme === 'light' ? 'Claro' : 'Oscuro'}</h2>;
};

export default CurrentTheme;
