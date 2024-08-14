<template>
  <div class="flex items-center justify-between py-4 border-b border-gray-200">
    <!-- Solda Resim -->
    <div class="flex items-center">
      <img
        class="object-cover w-16 h-16 rounded"
        :src="book.coverImageUrl"
        :alt="book.title"
      />
      <!-- Resmin Yanında Başlık ve Yazar -->
      <div class="ms-4">
        <h5 class="text-lg font-semibold text-gray-900">
          {{ book.title }}
        </h5>
        <p class="text-sm text-gray-600">
          {{ book.author }}
        </p>
      </div>
    </div>

    <!-- En Sağda Fiyat ve Adet Arttırma/Azaltma Butonları -->
    <div class="flex items-center">
      <span class="text-lg font-bold text-gray-900 me-6">
        $ {{ book.price }}
      </span>
      <!-- Adet Arttırma/Azaltma Butonları -->
      <div class="flex items-center">
        <!-- Eksiltme Butonu -->
        <button
          @click="removeFromBasket(book)"
          type="button"
          class="text-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 font-medium rounded-lg p-2"
        >
          -
        </button>
        <!-- Adet Gösterimi -->
        <span class="mx-2 text-lg font-semibold text-gray-900">{{
          book.count
        }}</span>
        <!-- Artırma Butonu -->
        <button
          @click="addToBasket(book)"
          type="button"
          class="text-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-lg p-2"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Book } from "@/types/Book";

const props = defineProps<{
  book: Book;
}>();

// Sepete kitap ekleme fonksiyonu
const addToBasket = (book: Book) => {
  useShoppingCart("add", props.book);
};

// Sepetten kitap çıkarma fonksiyonu
const removeFromBasket = (book: Book) => {
  useShoppingCart("remove", props.book);
};
</script>
