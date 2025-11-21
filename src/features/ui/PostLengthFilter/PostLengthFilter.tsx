import type { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectTitleLengthFilter,
  setTitleLengthFilter,
  resetFilters,
} from '../../../entities/filters/model/slice/filterSlice';
import Button from '../../../shared/ui/Button/Button';

import styles from './PostLengthFilter.module.css';

function PostLengthFilter() {
  const dispatch = useDispatch();
  const titleLengthFilter = useSelector(selectTitleLengthFilter);

  const handleTitleLengthChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitleLengthFilter(event.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <div className={styles.filter_container}>
      <input
        className={styles.filter_input}
        type="text"
        value={titleLengthFilter}
        placeholder="Фильтр по длине заголовка"
        onChange={handleTitleLengthChange}
      />
      <Button title="Очистить фильтры" onClick={handleResetFilters}>
        Сброс фильтров
      </Button>
    </div>
  );
}

export default PostLengthFilter;
