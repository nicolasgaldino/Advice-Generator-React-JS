import React from 'react'

const useFetch = (url = {}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [value, setValue] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
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
      })
  }, [url]);

  return { isLoading, value, error };
}

export default useFetch