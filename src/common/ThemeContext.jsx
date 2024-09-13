import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a Context object for the theme
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return { theme, toggleTheme };
}

// ThemeProvider component to provide the theme data to its children
export function ThemeProvider({ children }) {
  // State to hold the current theme, initialized from localStorage or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Effect to apply the theme to the document body and save it in localStorage
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle the theme between 'light' and 'dark'
  function toggleTheme() {
    setTheme((currentTheme) => {
      return currentTheme === 'light' ? 'dark' : 'light';
    });
  }

  // Provide the theme and toggleTheme function to children components
  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
