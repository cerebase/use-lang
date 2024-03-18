import { useEffect, useState} from "react";

interface props {
    origin: string
}

export function useChat({ origin}: props) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource(origin);

    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData(newData); // Handle incoming data
    };

    eventSource.onerror = (event) => {
      setError(event); // Handle errors
    };

    return () => eventSource.close();
  }, [origin]);

  return { data, error };
}
