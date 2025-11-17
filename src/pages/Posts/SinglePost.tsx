import { Link, useParams } from 'react-router-dom';
import CommentList from '../../widgets/ui/CommentList/CommentList';
import Button from '../../shared/ui/Button/Button';
import { useGetPostsQuery } from '../../entities/posts/api/postsApi';

function SinglePost() {
  const params = useParams();
  const { data: posts = [] } = useGetPostsQuery();

  if (!posts || posts.length === 0) {
    return <div>Loading...</div>;
  }

  const singlePost = posts.find((post) => post.id.toString() === params.id);

  return (
    <>
      <h2>Информация о посте номер {params.id}</h2>
      <h2>{singlePost.title}</h2>
      <p>{singlePost.body}</p>
      <CommentList />
      <Link to=".." relative="path">
        <Button>Все посты</Button>
      </Link>
    </>
  );
}

export default SinglePost;
