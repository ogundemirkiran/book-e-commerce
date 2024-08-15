<template>
  <div class="min-h-screen flex flex-col">
    <!-- NOT: Header -->
    <header class="sticky top-0 z-50 bg-white text-black py-4 px-6">
      <div class="container mx-auto flex justify-between items-center">
        <!--  NOT: Logo -->
        <nuxt-link to="/">
          <h1 class="text-xl sm:text-2xl font-bold">
            Book Commerce
          </h1></nuxt-link
        >

        <!-- NOT: SearchBar large than SM> -->
        <SearchInput v-if="isShowSearchBar" class="hidden sm:block" />

        <!-- NOT: Shopping cart -->
        <div class="relative inline-block mt-1">
          <nuxt-link to="/shopping-cart">
            <img
              src="@/assets/icons/cart.svg"
              class="inline w-10 h-10 me-3"
              alt="Cart"
            />
            <span
              v-if="count > 0"
              class="absolute top-[-2px] right-[23px] w-4 h-4 text-xs text-white bg-red-600 rounded-full inline-flex items-center justify-center p-0.5"
            >
              {{ count }}</span
            >
          </nuxt-link>
        </div>
      </div>
      <!-- NOT: SearchBar small than SM< -->
      <SearchInput v-if="isShowSearchBar" class="w-full block sm:hidden" />
    </header>

    <main class="flex-1 container mx-auto p-6">
      <NuxtPage />
    </main>

    <!-- NOT: Footer -->
    <footer class="bg-black text-white py-4 text-center text-xs sm:text-sm">
      <p>&copy; 2024 Book E-Commerce. All rights reserved.</p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import type { Book } from '~/types/Book';

const route = useRoute();
const shoppingCartList = useShoppingCartList();
const count = ref<number>(0);
const isShowSearchBar = ref<boolean>(false);

// NOT: Route watch
watch(
  () => route.path,
  (newPath: any) => {
    isShowSearchBar.value = newPath === '/';
  }
);

// NOT: shoppingCartList change watch
watch(
  () => shoppingCartList.value,
  (newValue: any) => {
    let counter: number = 0;

    newValue?.map((item: Book) => {
      if (item.count) {
        counter = counter + item.count;
      }
    });

    count.value = counter;
  },
  { deep: true }
);
</script>

<style scoped></style>
