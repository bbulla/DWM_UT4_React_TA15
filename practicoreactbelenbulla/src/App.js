import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from './context/ThemeContext'; 
import { LanguageProvider } from './context/LanguageContext'; 
import CurrentTheme from './components/CurrentTheme'; 
import CurrentLanguage from './components/CurrentLanguage'; 
import ThemeToggle from './components/ThemeToggle'; 
import LanguageToggle from './components/LanguageToggle'; 

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="App">
          <header className="App-header">
            <CurrentTheme /> {/* Componente que muestra el tema actual */}
            <CurrentLanguage /> {/* Componente que muestra el idioma actual */}
            <ThemeToggle /> {/* Componente para cambiar el tema */}
            <LanguageToggle /> {/* Componente para cambiar el idioma */}
          </header>
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;