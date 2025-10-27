import PostCard from '../../entities/post/ui/PostCard';

function PostList() {
  return (
    <>
      <PostCard
        postName="История"
        postDescrpiption="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, similique!"
        idPost="1"
      />
      <PostCard
        postName="История 2"
        postDescrpiption="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, similique!"
        idPost="2"
      />
    </>
  );
}

export default PostList;
