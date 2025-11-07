import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import ThemeProvider from './shared/lib/theme/ThemeProvider';
import router from './app/providers/router/Router';

import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider.Provider value={{ theme, setTheme }}>
      <RouterProvider router={router} />
    </ThemeProvider.Provider>
  );
}

export default App;
