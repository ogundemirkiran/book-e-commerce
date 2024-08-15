<template>
  <!-- NOT: Loading -->
  <div v-if="loading">
    <LoadingSpinner />
  </div>
  <div v-else class="container mx-auto py-8">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
      <!-- NOT: Shopping cart book list-->
      <div class="md:col-span-8">
        <div class="flex items-center justify-between">
          <h2 class="text-sm sm:text-xl font-bold">Available Books</h2>
          <span
            v-if="shoppingCartList?.length > 0"
            @click="removeAllShoppingCart"
            class="text-red-500 font-medium underline text-xs"
          >
            Clear Shopping Cart
          </span>
        </div>
        <div v-if="shoppingCartList?.length === 0" class="text-gray-500">
          No books available
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
const loading = ref<boolean>(true);

const shoppingCartList = useShoppingCartList();

loading.value = false;

const removeAllShoppingCart = () => {
  useShoppingCart('clear');
};
</script>
