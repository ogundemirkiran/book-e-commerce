<template>
  <div class="container mx-auto py-8">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
      <!-- Sol Taraf: Kitap Listesi -->
      <div class="md:col-span-8">
        <h2 class="text-xl font-bold mb-4">Available Books</h2>
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
const shoppingCartList = useShoppingCartList();
</script>
