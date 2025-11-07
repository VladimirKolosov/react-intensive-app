import { useState, useMemo, useEffect } from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import PostLengthFilter from '../../features/ui/PostLengthFilter/PostLengthFilter';

function PostList({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  const memoizedPosts = useMemo(() => {
    return filteredPosts.map((post) => <PostCard key={post.id} post={post} />);
  }, [filteredPosts]);

  return (
    <>
      <h1>Список постов</h1>
      {memoizedPosts}
      <PostLengthFilter posts={posts} setFilteredPosts={setFilteredPosts} />
    </>
  );
}

export default PostList;
