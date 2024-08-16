<template>
  <div v-if="!detailBook"><LoadingSpinner /></div>
  <div v-else>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-0">
      <!-- NOT: İmage -->
      <div class="bg-white p-5">
        <nuxt-img
          :key="detailBook.id"
          class="rounded-t-lg m-auto h-[400] sm:h-[600px]"
          :src="detailBook.coverImageUrl"
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
          <h2 class="mb-5 text-xl lg:text-4xl font-bold text-black">
            $ {{ detailBook?.price }}
          </h2>
        </div>
        <div>
          <LoadingButton
            :isLoading="isAddingToBasket"
            :isOk="isAddOk"
            buttonClass=" sm:mx-5 w-full text-xs justify-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
            @click="addToBasket"
          >
            Add to Cart
          </LoadingButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Book Details',
  meta: [
    {
      name: 'description',
      content: 'All book details info here'
    },
    {
      name: 'keywords',
      content: 'book detail, detail books, detail, book info'
    }
  ]
});

import type { Book } from '~/types/Book';
const route = useRoute();
const id = Number(route.params._id);

const detailBook = ref<Book | null>(null);
const isAddingToBasket = ref(false);
const isAddOk = ref(false);

const addToBasket = (e: any) => {
  isAddingToBasket.value = true;
  useShoppingCart('add', detailBook.value);

  setTimeout(() => {
    isAddingToBasket.value = false;
    isAddOk.value = true;
  }, 500);

  setTimeout(() => {
    isAddOk.value = false;
  }, 1000);
};

const checkImage = (url: string) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      resolve(true);
    };
    img.onerror = () => {
      resolve(false);
    };
  });
};

onMounted(async () => {
  const bookList: Book[] | null =
    (useBookList().value.length > 0 && useBookList().value) ||
    JSON.parse(localStorage.getItem('bookList') || '[]') ||
    null;

  if (!bookList) return;

  const findBook = bookList?.find((item: Book) => item.id === id);

  if (!findBook) return;

  // NOT : Image validation
  const isTest = await checkImage(findBook.coverImageUrl);

  detailBook.value = {
    ...findBook,
    coverImageUrl: isTest ? findBook?.coverImageUrl : '/dummy-image.jpg'
  };
});
</script>
