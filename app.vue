<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout name="custom">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import type { Book } from "./types/Book";

// onMounted(() => {
//   const localBookList: Book[] | null = localStorage.getItem("bookList")
//     ? JSON.stringify(localStorage.getItem("bookList"))
//     : null;
//   if (localBookList) {
//     useBookList().value = localBookList;
//   }
// });
</script>
