<template>
  <div
    class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
  >
    <!-- NOT: İmage -->
    <nuxt-link :to="`/books/${book.id}`" class="cursor-pointer">
      <nuxt-img
        :key="book.id"
        class="p-5 rounded-t-lg h-[400px] m-auto"
        :src="isImage ? book.coverImageUrl : 'dummy-image.jpg'"
        :alt="book.title"
      />
    </nuxt-link>

    <!-- NOT: Details -->
    <div class="px-4 pb-2">
      <div>
        <h5 class="text-xl font-semibold tracking-tight text-gray-900">
          {{ book.title }}
        </h5>
        <h6 class="text-teal-600/50 font-semibold text-xs italic">
          {{ book.author }}
        </h6>
        <div class="text-end me-2">
          <span class="text-3xl font-bold text-gray-900">
            $ {{ book.price }}
          </span>
        </div>
      </div>

      <!-- NOT: Actions -->
      <div class="flex items-center justify-end mt-3">
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
</template>

<script lang="ts" setup>
import type { Book } from '@/types/Book';

const props = defineProps<{
  book: Book;
}>();

const isAddingToBasket = ref(false);
const isRemovingFromBasket = ref(false);

const isImage = ref<boolean>(false);

onBeforeMount(() => {
  const img = new Image();
  img.src = props.book.coverImageUrl;
  img.onload = () => {
    isImage.value = true;
  };
  img.onerror = () => {
    isImage.value = false;
  };
});

const addToBasket = (e: any) => {
  useShoppingCart('add', props.book);

  setTimeout(() => {
    isAddingToBasket.value = false;
  }, 500);
};

const removeFromBasket = () => {
  useShoppingCart('remove', props.book);

  setTimeout(() => {
    isRemovingFromBasket.value = false;
  }, 500);
};
</script>
