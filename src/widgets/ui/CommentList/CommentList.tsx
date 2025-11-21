import { useCallback, useState } from 'react';

import styles from './CommentList.module.css';
import CommentCard from './CommentCard';
import type { Comment } from './CommentType';

const comments: Comment[] = [
  {
    id: 1,
    text: 'First Comment',
    author: 'Nick',
    createdAt: '2025-05-10',
  },
  {
    id: 2,
    text: 'Second Comment',
    author: 'Ben',
    createdAt: '2025-05-10',
  },
];

function CommentList() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleComments = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className={styles.comments_wrapper}>
      <div className={styles.comments_info}>
        <h3 className={styles.comments_title}>Комментарии</h3>
        <button onClick={toggleComments} className={styles.comments_toggle}>
          {isOpen ? '\u25B2' : '\u25BC'}
        </button>
      </div>
      {isOpen && (
        <div className={styles.comments_container}>
          {comments.map((comment) => (
            <CommentCard comment={comment} key={comment.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CommentList;
