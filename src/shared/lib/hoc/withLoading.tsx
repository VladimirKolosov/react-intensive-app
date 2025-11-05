import { useState } from 'react';

const withLoading = (WrappedComponent) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return (
      <div>
        {isLoading ? <p>Loading...</p> : <WrappedComponent {...props} />}
      </div>
    );
  };
};

export default withLoading;
