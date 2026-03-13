import { useEffect } from "react";
import useAsync from "./useAsync";

const useFetch = (fetchFunction) => {
  const { data, loading, error, execute } = useAsync(fetchFunction);

  useEffect(() => {
    execute();
  }, [execute]);

  return { data, loading, error };
};

export default useFetch;
