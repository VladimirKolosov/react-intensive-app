import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectTitleLengthFilter } from '../../entities/filters/model/slice/filterSlice';
import PostCard from '../../entities/post/ui/PostCard';
import PostLengthFilter from '../../features/ui/PostLengthFilter/PostLengthFilter';
import filterByLength from '../../features/lib/LenghtFilter/filterByLength';

function PostList({ posts }) {
  const titleLengthFilter = useSelector(selectTitleLengthFilter);

  const filteredPosts = useMemo(() => {
    if (!titleLengthFilter) return posts;
    return filterByLength(posts, Number(titleLengthFilter));
  }, [posts, titleLengthFilter]);

  return (
    <>
      <h1>Список постов</h1>
      {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <PostLengthFilter />
    </>
  );
}

export default PostList;
