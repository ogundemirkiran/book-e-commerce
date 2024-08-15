import type { Book } from "~/types/Book";

export const useGetBookList = async () => {
  const runtimeConfig = useRuntimeConfig();
  const baseUrl = runtimeConfig.public.baseUrl;

  const { data, error } = await useFetch<Book[]>(`${baseUrl}/books`);
  if (error.value) {
    throw new Error("Error fetching books");
  }

  useBookList().value = data.value;
};
