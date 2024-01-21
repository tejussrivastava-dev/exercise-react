import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import { UseApiOptions, UseApiResult } from "../Interface";

export function useGet<TData>(
  url: string,
  options?: UseApiOptions
): UseApiResult<TData> {
  const [data, setData] = useState<TData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError<any> | null>(null); // Explicitly typing the state

  const fetchData = async () => {
    try {
      setLoading(true);
      const response: AxiosResponse<TData> = await axios.get(url);
      setData(response.data);
    } catch (error: any) {
      // Catching the error explicitly as AxiosError
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!options?.manual) {
      fetchData();
    }
  }, []);

  return { data, loading, error, fetchData };
}
