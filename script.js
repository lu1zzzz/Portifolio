const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

document.body.classList.add(`theme-${currentTheme}`);

themeToggleBtn.addEventListener('click', () => {
    const isLightTheme = document.body.classList.contains('theme-light');
    const newTheme = isLightTheme ? 'dark' : 'light';

    document.body.classList.remove(`theme-${isLightTheme ? 'light' : 'dark'}`);
    document.body.classList.add(`theme-${newTheme}`);

    localStorage.setItem('theme', newTheme);
});

