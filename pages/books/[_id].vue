<template>
  <div v-if="!detailBook"><LoadingSpinner /></div>
  <div v-else>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-0">
      <!-- NOT: İmage -->
      <div>
        <img
          class="rounded-t-lg m-auto h-[400] sm:h-[600px]"
          :src="detailBook?.coverImageUrl"
          :alt="detailBook?.title"
        />
      </div>

      <!-- NOT: Detail -->
      <div>
        <div class="p-5">
          <h1
            class="mb-3 text-xl sm:text-4xl font-bold tracking-tight text-gray-900"
          >
            {{ detailBook?.title }}
          </h1>
          <h2 class="mb-3 text-lg sm:text-2xl font-normal text-gray-700">
            {{ detailBook?.author }}
          </h2>
          <p class="mb-3 text-sm lg:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <h2 class="mb-5 text-xl lg:text-4xl font-bold text-black text-end">
            $ {{ detailBook?.price }}
          </h2>
        </div>
        <div class="flex justify-end items-center">
          <LoadingButton
            :isLoading="isAddingToBasket"
            buttonClass="text-xs text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
            @click="addToBasket"
          >
            Add to Cart
          </LoadingButton>
          <LoadingButton
            :isLoading="isRemovingFromBasket"
            buttonClass="text-xs text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
            @click="removeFromBasket"
          >
            Remove from Cart
          </LoadingButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Book } from '~/types/Book';
const route = useRoute();
const id = Number(route.params._id);

const detailBook = ref<Book | null>(null);
const isAddingToBasket = ref(false);
const isRemovingFromBasket = ref(false);

const addToBasket = (e: any) => {
  useShoppingCart('add', detailBook);

  setTimeout(() => {
    isAddingToBasket.value = false;
  }, 500);
};

const removeFromBasket = () => {
  useShoppingCart('remove', detailBook);

  setTimeout(() => {
    isRemovingFromBasket.value = false;
  }, 500);
};

onMounted(() => {
  const bookList: Book[] | null =
    (useBookList().value.length > 0 && useBookList().value) ||
    JSON.parse(localStorage.getItem('bookList') || '[]') ||
    null;

  if (!bookList) return;

  const findBook = bookList?.find((item: Book) => item.id === id);
  detailBook.value = findBook;
});
</script>
