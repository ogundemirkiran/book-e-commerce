<template>
  <div v-if="loading">
    <LoadingSpinner />
  </div>
  <div v-else class="container mx-auto py-8">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
      <!-- Sol Taraf: Kitap Listesi -->
      <div class="md:col-span-8">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-bold mb-4">Available Books</h2>
          <button
            v-if="shoppingCartList?.length > 0"
            @click="removeAllShoppingCart"
            type="button"
            class="text-red-500 bg-white border border-red-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xs px-3 py-2"
          >
            Clear Shopping Cart
          </button>
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

      <!-- Sağ Taraf: Sepet Özeti -->
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
  useShoppingCart("clear");
};
</script>
