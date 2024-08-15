<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 items-center py-4 border-b border-gray-200"
  >
    <!-- NOT: Title -->
    <div class="flex">
      <nuxt-link :to="`/books/${book.id}`">
        <img
          class="object-cover w-16 h-16 rounded"
          :src="book.coverImageUrl"
          :alt="book.title"
        />
      </nuxt-link>
      <div class="ms-4">
        <h5 class="text-sm sm:text-lg font-semibold text-gray-900">
          {{ book.title }}
        </h5>
        <p class="text-xs sm:text-sm text-gray-600">
          {{ book.author }}
        </p>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <!-- NOT: Price -->
      <span class="text-sm sm:text-lg font-bold text-gray-900 me-6">
        $ {{ book.price }}
      </span>

      <!-- NOT: Actions -->
      <div class="flex items-center">
        <button
          @click="removeFromBasket(book)"
          type="button"
          class="text-xs sm:text-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 font-medium rounded-lg p-2"
        >
          -
        </button>
        <span class="mx-2 text-lg font-semibold text-gray-900">{{
          book.count
        }}</span>
        <button
          @click="addToBasket(book)"
          type="button"
          class="text-xs sm:text-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-lg p-2"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Book } from '@/types/Book';

const props = defineProps<{
  book: Book;
}>();

const addToBasket = (book: Book) => {
  useShoppingCart('add', props.book);
};

const removeFromBasket = (book: Book) => {
  useShoppingCart('remove', props.book);
};
</script>
