import { useState, useEffect } from 'react';

function useFetch<T>(url: string): [T | undefined, boolean] {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result: T = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return [data, loading];
}

export default useFetch;
