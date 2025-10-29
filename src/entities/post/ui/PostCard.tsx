function PostCard({ post }) {
  return (
    <>
      <h1>{post.postTitle}</h1>
      <h3>{post.id}</h3>
      <p>{post.text}</p>
    </>
  );
}

export default PostCard;
