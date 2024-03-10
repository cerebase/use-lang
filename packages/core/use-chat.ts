import { useEffect, useState } from "react";

export function useChat(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource(url);

    eventSource.onmessage = (event) => {
      // Handle incoming data
      const newData = JSON.parse(event.data);
      setData(newData);
    };

    eventSource.onerror = (event) => {
      // Handle errors
      setError(event);
    };

    return () => eventSource.close();
  }, [url]);

  return { data, error };
}
