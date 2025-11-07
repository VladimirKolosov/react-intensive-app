import usePosts from '../../widgets/PostList/model/hooks/usePosts';
import withLoading from '../../shared/lib/hoc/withLoading';
import PostList from '../../widgets/PostList/PostList';

const URL = 'https://jsonplaceholder.typicode.com/posts';

const PostListWithLoading = withLoading(PostList);

function Posts() {
  const { posts, error } = usePosts(URL);
  return <PostListWithLoading posts={posts} error={error} />;
}

export default Posts;
