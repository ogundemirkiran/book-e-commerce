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

// const API_BASE_URL = "https://dev-test.360y.co";

// export const getBooks = async (): Promise<Book[]> => {

//   if (error.value) {
//     throw new Error("Error fetching books");
//   }

//   const books = data.value || [];

//   // Not: coverImageUrl eksik olan kitapların imagelerini güncelle
//   const updatedBooks = await Promise.all(
//     books.map(async (book, index) => {
//       const isValid = await isValidImageUrl(book.coverImageUrl);
//       return {
//         ...book,
//         coverImageUrl: isValid
//           ? book.coverImageUrl
//           : `https://picsum.photos/id/${index}/500/700`,
//       };
//     })
//   );

//   return updatedBooks;
// };

// const isValidImageUrl = async (url: string): Promise<boolean> => {
//   try {
//     const response = await fetch(url, { method: "GET" });
//     if (response?.status === 200) return true;

//     return false;
//   } catch (err) {
//     return false;
//   }
// };
