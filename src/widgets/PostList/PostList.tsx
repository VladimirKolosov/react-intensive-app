import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectTitleLengthFilter } from '../../entities/filters/model/slice/filterSlice';
import PostCard from '../../entities/post/ui/PostCard';
import ItemList from '../../shared/ui/ItemList/ItemList';
import PostLengthFilter from '../../features/ui/PostLengthFilter/PostLengthFilter';
import filterByLength from '../../features/lib/LenghtFilter/filterByLength';
import type { Post } from '../../entities/posts/model/type/PostType';

function PostList({ posts }: { posts: Post[] }) {
  const titleLengthFilter = useSelector(selectTitleLengthFilter);

  const filteredPosts = useMemo(() => {
    if (!titleLengthFilter) return posts;
    return filterByLength(posts, Number(titleLengthFilter));
  }, [posts, titleLengthFilter]);

  return (
    <>
      <h1>Список постов</h1>
      <ItemList<Post>
        items={filteredPosts}
        renderItem={(post) => <PostCard key={post.id} post={post} />}
      />
      <PostLengthFilter />
    </>
  );
}

export default PostList;
