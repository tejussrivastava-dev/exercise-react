import { AxiosError } from "axios";

export interface UseApiOptions {
  manual?: boolean; // If true, the request won't be triggered automatically
}

export interface UseApiResult<TData> {
  data: TData | null;
  loading: boolean;
  error: AxiosError<any> | null;
  fetchData: () => void;
}
