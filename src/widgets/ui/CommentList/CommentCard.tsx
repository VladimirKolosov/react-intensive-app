import type { Comment } from './CommentType';

type CommentCardProps = {
  comment: Comment;
};

function CommentCard({ comment }: CommentCardProps) {
  return (
    <>
      <h3>{comment.author}</h3>
      <p>{comment.createdAt}</p>
      <p>{comment.text}</p>
    </>
  );
}

export default CommentCard;
