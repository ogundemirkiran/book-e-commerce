export function useBookHelpers() {
  const addBook = (book: {
    id: number;
    title: string;
    author: string;
    cover: string;
    price: number;
  }) => {
    let books = JSON.parse(localStorage.getItem("books") || "[]");
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  };

  const removeBook = (bookId: number) => {
    let books = JSON.parse(localStorage.getItem("books") || "[]");
    books = books.filter((b: { id: number }) => b.id !== bookId);
    localStorage.setItem("books", JSON.stringify(books));
  };

  return {
    addBook,
    removeBook,
  };
}
