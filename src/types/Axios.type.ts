import { AxiosRequestConfig } from "axios";

export interface UseAxiosProps<T> {
  url: string;
  options?: AxiosRequestConfig;
}

export interface UseAxiosState<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  refetch(): void;
}
