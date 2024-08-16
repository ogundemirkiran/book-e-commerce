<template>
  <!-- NOT: Loading -->
  <div v-if="loading">
    <LoadingSpinner />
  </div>
  <div v-else class="container mx-auto sm:py-8">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
      <!-- NOT: Shopping cart book list-->
      <div class="md:col-span-8 p-2 bg-white">
        <div class="flex items-center justify-between pt-2">
          <h2
            :class="{ 'm-auto': shoppingCartList?.length === 0 }"
            class="text-md sm:text-xl font-bold"
          >
            Available Books
          </h2>
          <span
            v-if="shoppingCartList?.length > 0"
            @click="removeAllShoppingCart"
            class="text-red-500 font-medium underline text-xs cursor-pointer"
          >
            Clear Shopping Cart
          </span>
        </div>
        <div
          v-if="shoppingCartList?.length === 0"
          class="text-center text-gray-500 mt-5 pt-5"
        >
          <p class="text-sm sm:text-md">No books available</p>
          <nuxt-link to="/">
            <button
              type="button"
              class="mt-2 text-xs text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Continue Shopping
            </button>
          </nuxt-link>
        </div>
        <div v-else>
          <div v-for="book in shoppingCartList" :key="book.id">
            <BookShoppingCard :book="book" />
          </div>
        </div>
      </div>

      <!-- NOT: Checkout card -->
      <CheckoutCard class="md:col-span-4" />
    </div>
  </div>
</template>
;

<script lang="ts" setup>
useHead({
  title: 'Book Shopping',
  meta: [
    {
      name: 'description',
      content: 'All book shopping list here'
    },
    {
      name: 'keywords',
      content: 'book shopping cart, shopping, shopping cart, book cart'
    }
  ]
});

const loading = ref<boolean>(true);

const shoppingCartList = await useShoppingCartList();

onMounted(() => {
  loading.value = false;
});

const removeAllShoppingCart = () => {
  useShoppingCart('clear');
};
</script>
