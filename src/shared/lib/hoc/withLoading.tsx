import { useEffect, useState } from 'react';

const withLoading = (WrappedComponent) => {
  return (props) => {
    const { error, isLoading } = props;
    const [showLoading, setShowLoading] = useState(isLoading);

    useEffect(() => {
      if (isLoading) {
        setShowLoading(true);
        const timer = setTimeout(() => setShowLoading(false), 2000);
        return () => clearTimeout(timer);
      }
    }, [isLoading]);
    if (isLoading) return <p>Загрузка данных...</p>;
    if (error) return <p>Ошибка загрузки данных...</p>;
    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
