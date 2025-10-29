import PostCard from '../../entities/post/ui/PostCard';

function PostList({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;
