import useSWR, { SWRConfiguration } from "swr";
const apiUrl = process.env.NEXT_PUBLIC_API;

export const useGetData = <T>(path: string, config: SWRConfiguration = {}) => {
  const { data, error, isLoading } = useSWR<T>(`${apiUrl}/${path}`, config);

  return {
    data,
    error,
    isLoading,
  };
};
