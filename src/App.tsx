import { useState } from 'react';
import PostList from './widgets/PostList/PostList';
import Header from './widgets/LayoutHader/Header';
import ThemeProvider from './shared/lib/theme/ThemeProvider';
import './App.css';

const posts = [
  {
    id: 1,
    postTitle: 'История',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, similique!',
  },
  {
    id: 2,
    postTitle: 'Другая история',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, similique!',
  },
];

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeProvider.Provider value={{ theme, setTheme }}>
      <Header />
      <PostList posts={posts} />
    </ThemeProvider.Provider>
  );
}

export default App;
