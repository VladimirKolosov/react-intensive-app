import { useEffect, useState } from 'react';

const withLoading = (WrappedComponent) => {
  return (props) => {
    const { error } = props;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    });
    if (isLoading) return <p>Загрузка данных...</p>;
    if (error) return <p>Ошибка загрузки данных...</p>;
    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
