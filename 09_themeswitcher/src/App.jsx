import React, { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider } from './context/theme';
import Themebtn from './components/Themebtn';
import Card from './components/Card';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  // Function to toggle theme to light
  const lightTheme = () => {
    setThemeMode('light');
  };

  // Function to toggle theme to dark
  const darkTheme = () => {
    setThemeMode('dark');
  };

  // Apply theme changes to the HTML element when themeMode changes
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themebtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

// change darkmode in tail.json to enable this theme mode switching