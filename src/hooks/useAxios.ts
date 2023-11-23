import axiosInstance from "@/Services/AxiosInstance";
import { ApiResponse } from "@/types/Api.types";
import { UseAxiosProps, UseAxiosState } from "@/types/Axios.type";
import axios from "axios";
import { useEffect, useState } from "react";

function useAxios<T>({
  url = "/",
  options,
}: UseAxiosProps<T>): UseAxiosState<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response: ApiResponse<T> = await axiosInstance(url, options);
      setData(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
      } else {
        setError((error as Error).message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, options]);

  return { data, error, loading, refetch: fetchData };
}

export default useAxios;
