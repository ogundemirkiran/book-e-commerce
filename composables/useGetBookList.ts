import type { Book } from "~/types/Book";
import { useFilteredBookList } from "./states";

export const useGetBookList = async () => {
  const runtimeConfig = useRuntimeConfig();
  const baseUrl = runtimeConfig.public.baseUrl;

  const { data, error } = await useFetch<Book[]>(`${baseUrl}/books`);
  if (error.value) {
    throw new Error("Error fetching books");
  }

  useBookList().value = data.value;
  useFilteredBookList().value = data.value;
};
