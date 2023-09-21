import { useState, useEffect } from 'react';
import axios from 'axios';

function useApi<T>(url: string): [T | null, boolean, string] {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);

  return [data, loading, error];
}

export default useApi;
