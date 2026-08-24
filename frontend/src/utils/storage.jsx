const THEME_KEY = "theme";

export const getTheme = () => {
	const theme = localStorage.getItem(THEME_KEY);

	return theme === "dark" || theme === "light" ? theme : null;
};

export const setTheme = (theme) => {
	localStorage.setItem(THEME_KEY, theme);
};
