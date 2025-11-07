import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';
function PostCard({ post }) {
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
