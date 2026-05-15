export const setTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('admin-theme', theme);
};

export const getTheme = () => {
    return localStorage.getItem('admin-theme') || 'BLUE_THEME';
};