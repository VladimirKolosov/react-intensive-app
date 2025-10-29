import { useContext, useEffect } from 'react';
import Button from '../../shared/ui/Button/Button';
import ThemeProvider from '../../shared/lib/theme/ThemeProvider';

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeProvider);

  useEffect(() => {
    if (theme === 'light') document.body.classList.add('light');
    else document.body.classList.remove('light');
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <Button onClick={changeTheme} title="Поменять тему сайта">
        Сменить тему
      </Button>
    </>
  );
}

export default ThemeSwitcher;
