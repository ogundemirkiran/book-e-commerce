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

const shoppingCartList = useShoppingCartList();

onMounted(() => {
  const localList: Book[] | null = localStorage.getItem("shoppingCartList")
    ? JSON.parse(localStorage.getItem("shoppingCartList") || "[]")
    : null;

  if (localList) {
    shoppingCartList.value = localList;
  }
});
</script>
