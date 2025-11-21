import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';
import type { Post } from '../../posts/model/type/PostType';

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  return (
    <>
      <h2 className={styles.posts_container}>
        <Link className={styles.post} to={post.id.toString()}>
          {post.title}
        </Link>
      </h2>
    </>
  );
}

export default PostCard;
