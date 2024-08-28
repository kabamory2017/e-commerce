import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchData = (url) => {
  // state => loading : true | false
  // data =>
  // error => error
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let dataResponse = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/${url}`
        );
        setData(dataResponse.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return [data, loading, error];
};
