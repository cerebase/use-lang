import { useEffect, useState} from "react";

interface props {
    origin: string
}

export function useChat({ origin}: props) {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<number | null> (null);

  useEffect(() => {
    const eventSource = new EventSource(origin);

    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData(newData); // Handle incoming data
    };

    eventSource.onerror = (event) => {
      setError(event.timeStamp); // Handle errors
    };

    return () => eventSource.close();
  }, [origin]);

  return { data, error };
}
