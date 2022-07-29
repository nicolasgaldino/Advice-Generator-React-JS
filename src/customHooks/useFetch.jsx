import React from 'react'

const useFetch = (url = {}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [value, setValue] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setIsLoading(true)
    fetch(url)
      .then(async (response) => {
        const jsonReturn = await response.json();
        setValue(jsonReturn);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  const reFetch = () => {
    setIsLoading(true)
    fetch(url)
      .then(async (response) => {
        const jsonReturn = await response.json();
        setValue(jsonReturn);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { isLoading, value, error, reFetch };
}

export default useFetch