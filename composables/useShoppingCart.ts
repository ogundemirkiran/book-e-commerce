import type { Book } from "~/types/Book";

export const useShoppingCart = async (name: string, obj: Book) => {
  const shoppingCartList = useShoppingCartList();

  if (name === "add") {
    const findIndexBook = shoppingCartList.value.findIndex(
      (item: Book) => item?.id === obj?.id
    );

    console.log(findIndexBook);

    if (findIndexBook > -1) {
      shoppingCartList.value.splice(findIndexBook, 1, {
        ...obj,
        count: shoppingCartList.value[findIndexBook].count + 1,
      });
    } else {
      shoppingCartList.value.push({ ...obj, count: 1 });
    }
  }

  if (name === "remove") {
    const findIndexBook = shoppingCartList.value.findIndex(
      (item: Book) => item.id === obj.id
    );

    if (findIndexBook > -1) {
      if (shoppingCartList.value[findIndexBook].count > 1) {
        shoppingCartList.value.splice(findIndexBook, 1, {
          ...obj,
          count: shoppingCartList.value[findIndexBook].count - 1,
        });
      } else {
        shoppingCartList.value.splice(findIndexBook, 1);
      }
    }
  }
};
