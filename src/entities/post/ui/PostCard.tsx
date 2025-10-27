function PostCard({ postName, postDescrpiption, idPost }) {
  return (
    <div>
      <h1>{postName}</h1>
      <h4>{idPost}</h4>
      <p>{postDescrpiption}</p>
    </div>
  );
}

export default PostCard;
