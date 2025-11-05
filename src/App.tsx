import { useState } from 'react';
import PostList from './widgets/PostList/PostList';
import Header from './widgets/LayoutHader/Header';
import ThemeProvider from './shared/lib/theme/ThemeProvider';
import withLoading from './shared/lib/hoc/withLoading';
import './App.css';

const PostListWithLoading = withLoading(PostList);

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeProvider.Provider value={{ theme, setTheme }}>
      <Header />
      <PostListWithLoading />
    </ThemeProvider.Provider>
  );
}

export default App;
