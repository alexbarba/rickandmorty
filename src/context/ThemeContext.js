import React, { useState, createContext } from 'react';

const ThemeContext = createContext({});

export function ThemeContextProvider({ children }) {
	const [darkMode, setDarkMode] = useState(false);
	localStorage.darkMode = darkMode;
	darkMode
		? document.querySelector('html').classList.add('dark')
		: document.querySelector('html').classList.remove('dark');

	return (
		<ThemeContext.Provider value={{ darkMode, setDarkMode }}>
			{children}
		</ThemeContext.Provider>
	);
}
export default ThemeContext;
