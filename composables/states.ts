import type { Book } from "~/types/Book";

export const useBookList = () => useState<Book[]>("book-list", () => []);
export const useShoppingCartList = () =>
  useState<Book[]>("shopping-cart-list", () => []);
export const useFilteredBookList = () =>
  useState<Book[]>("filtered-cart-list", () => []);
