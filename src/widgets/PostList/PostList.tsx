import { useState, useMemo } from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import PostLengthFilter from '../../features/ui/PostLengthFilter/PostLengthFilter';

const posts = [
  {
    id: 1,
    title: 'История',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, similique!',
  },
  {
    id: 2,
    title: 'Другая история',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, similique!',
  },
  {
    id: 3,
    title: 'Cупер крутая история во всем мире',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, similique!',
  },
];

function PostList() {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const memoizedPosts = useMemo(() => {
    return filteredPosts.map((post) => <PostCard key={post.id} post={post} />);
  }, [filteredPosts]);
  return (
    <>
      {memoizedPosts}
      <PostLengthFilter posts={posts} setFilteredPosts={setFilteredPosts} />
    </>
  );
}

export default PostList;
