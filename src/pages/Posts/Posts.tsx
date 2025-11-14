import { useGetPostsQuery } from '../../entities/posts/api/postsApi';
import withLoading from '../../shared/lib/hoc/withLoading';
import PostList from '../../widgets/PostList/PostList';

const PostListWithLoading = withLoading(PostList);

function Posts() {
  const { data: posts = [], error, isLoading } = useGetPostsQuery();
  return (
    <PostListWithLoading posts={posts} error={error} isLoading={isLoading} />
  );
}

export default Posts;
