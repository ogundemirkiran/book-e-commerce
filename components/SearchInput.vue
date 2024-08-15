<template>
  <form class="w-2/4 mx-auto">
    <label
      for="default-search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only"
      >Search</label
    >
    <div class="relative">
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
      >
        <img
          src="@/assets/icons/search.svg"
          class="inline w-4 h-4 me-3"
          alt="Search"
        />
      </div>
      <input
        type="search"
        id="default-search"
        class="block w-full px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search title, auther"
        v-model="searchText"
        @input="handleOnChangeSearch"
        autocomplete="off"
      />
    </div>
  </form>
</template>
<script lang="ts" setup>
import type { Book } from '~/types/Book';

const bookList = useBookList();
const filteredBookList = useFilteredBookList();
const searchText = ref<string>('');

const handleFilteredBookList = computed(() => {
  let newArrData: Book[] = [];

  if (!searchText.value) {
    newArrData = bookList.value;
  }

  newArrData = bookList.value.filter(
    (book: Book) =>
      book.title.toLowerCase().includes(searchText.value.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.value.toLowerCase())
  );

  filteredBookList.value = newArrData;
});

const handleOnChangeSearch = (e: Event) => {
  handleFilteredBookList.value;
};
</script>
