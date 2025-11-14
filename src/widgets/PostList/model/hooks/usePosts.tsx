import { useCallback, useEffect, useState } from 'react';

const usePosts = (url) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const fetchPost = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Ошибка загрузки');
      const data = await response.json();
      setPosts(data.slice(0, 5));
    } catch (err) {
      setError(err.message);
    }
  }, [url]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);
  return { posts, error };
};

export default usePosts;
