import { useEffect, useState } from "react";

export function useChat(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const reader = response.body.getReader();

        while (true) {
          const { done, value } = await reader.read();

          if (done) {
            break; // Exit the loop if the stream is done
          }

          // Handle incoming data
          const newData = JSON.parse(new TextDecoder().decode(value));
          setData(newData);
        }
      } catch (error) {
        // Handle errors
        setError(error);
      }
    };

    fetchData();

    return () => {
      // Cleanup if the component unmounts
    };
  }, [url]);

  return { data, error };
}
