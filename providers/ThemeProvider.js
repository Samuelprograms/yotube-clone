import React, { createContext, useEffect, useState } from "react";
import { getCookie, setCookie } from "utils/cookiesUtils";

const initialValue = {
	isDarkTheme: false,
	toggleTheme: () => {},
};

export const ThemeContext = createContext(initialValue);

const ThemeProvider = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(initialValue.isDarkTheme);

	const toggleTheme = () => {
		setCookie("isDarkTheme", !isDarkTheme, 365);
		setIsDarkTheme(!isDarkTheme);
	};

	useEffect(() => {
		if (!getCookie("isDarkTheme")) {
			setCookie("isDarkTheme", false, 365);
		} else {
			setIsDarkTheme(getCookie("isDarkTheme") === "true");
		}
	}, []);

	return (
		<ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
