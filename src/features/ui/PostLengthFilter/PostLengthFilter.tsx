import { useState } from 'react';
import Button from '../../../shared/ui/Button/Button';
import filterByLength from '../../lib/LenghtFilter/filterByLength';
import styles from './PostLengthFilter.module.css';

function PostLengthFilter({ posts, setFilteredPosts }) {
  const [length, setLength] = useState('');

  const handleClickFilter = () => {
    const convertedLength = Number(length);
    const result = filterByLength(posts, convertedLength);
    setFilteredPosts(result);
  };

  const handleInputChange = (event) => {
    setLength(event.target.value);
  };

  return (
    <div className={styles.filter_container}>
      <input
        className={styles.filter_input}
        type="text"
        value={length}
        placeholder="Введите длину заголовка"
        onChange={handleInputChange}
      />
      <Button
        title="Фильтрация постов по длине заголовка"
        onClick={handleClickFilter}>
        Отфильтровать
      </Button>
    </div>
  );
}

export default PostLengthFilter;
