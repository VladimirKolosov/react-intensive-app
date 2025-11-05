import CommentList from '../../../widgets/ui/CommentList/CommentList';
function PostCard({ post }) {
  return (
    <>
      <h2>{post.title}</h2>
      <h3>{post.id}</h3>
      <p>{post.text}</p>
      <CommentList />
    </>
  );
}

export default PostCard;
