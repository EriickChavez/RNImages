import {useState, useEffect} from 'react';

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((response: T) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((err: Error) => {
        setError(err);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  }, [url]);

  return {data, isLoading, error};
};

export default useFetch;
