
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

const lightTheme = {
  background: '#FFFFFF',
  background2: '#ffffff',
  heading: '#060962',
  heading2: '#FA6900',
  heading3: '#0560FA',
  color: '#000000',
  card: '#FFFFFF',
  card2: '#f6f6f6',
  text: '#505050',
  text2: '#060962',
  text3: '#505050',
  text4: '#39335E',
};

const darkTheme = {
  background: '#000000',
  background2: 'rgba(0, 0, 0, 0.7)',
  heading: '#FA6900',
  heading2: '#060962',
  heading3: '#FA6900',
  color: '#FFFFFF',
  card: 'rgba(241, 241, 241, 0.3)',
  card2: 'rgba(241, 241, 241, 0.3)',
  text: '#F5F5F5',
  text2: "#ffffff",
  text3: '#f6f6f6',
  text4: '#ffffff',
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const loadDarkModeState = async () => {
      try {
        const darkModeState = await AsyncStorage.getItem("darkMode");
        if (darkModeState !== null) {
          const parsedState = JSON.parse(darkModeState);
          setDarkMode(parsedState.darkMode);
          setTheme(parsedState.darkMode ? darkTheme : lightTheme);
        }
      } catch (error) {
        console.error("Error loading dark mode state:", error);
      }
    };

    loadDarkModeState();
  }, []);

  const toggleTheme = async () => {
    try {
      const newDarkMode = !darkMode;
      setDarkMode(newDarkMode);
      setTheme(newDarkMode ? darkTheme : lightTheme);
      await AsyncStorage.setItem("darkMode", JSON.stringify({ darkMode: newDarkMode }));
    } catch (error) {
      console.error("Error saving dark mode state:", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
