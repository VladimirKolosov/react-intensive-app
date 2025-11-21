import { useEffect, useState } from 'react';

type WithLoadingProps = {
  isLoading?: boolean;
  error?: unknown;
};

function withLoading<T extends object>(
  WrappedComponent: React.ComponentType<T>
) {
  return (props: T & WithLoadingProps) => {
    const { error, isLoading, ...rest } = props;
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

    return <WrappedComponent {...(rest as T)} />;
  };
}

export default withLoading;
