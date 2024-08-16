<template>
  <div class="p-6 bg-white rounded-lg shadow-lg h-fit sticky top-20">
    <!-- NOT: Shopping cart -->
    <div class="mb-4">
      <h2 class="text-md sm:text-xl font-bold text-gray-900 mb-2">
        Shopping Cart Total
      </h2>
      <div class="flex justify-between mb-2">
        <span class="text-gray-700 text-sm sm:text-md"
          >Total Number of Books:</span
        >
        <span class="font-semibold text-gray-900 text-sm sm:text-md">
          {{ totalQuantity }}
        </span>
      </div>
      <hr />
      <div class="mt-3 flex justify-between">
        <span class="text-gray-700 text-sm sm:text-md">Total Amount:</span>
        <span class="font-semibold text-gray-900 text-lg sm:text-xl"
          >$ {{ totalPrice.toFixed(2) }}</span
        >
      </div>

      <!-- NOT: Buy -->
      <div class="mt-5">
        <button
          @click="openModal"
          type="submit"
          :class="{ 'm-auto': shoppingCartList?.length === 0 }"
          class="w-full py-2 px-4 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded disabled:opacity-50"
          :disabled="shoppingCartList.length === 0"
        >
          Buy
        </button>
      </div>

      <!-- NOT: Modal -->
      <div>
        <Modal
          :isOpen="isModalOpen"
          title="Register Form"
          @update:isOpen="isModalOpen = $event"
          @decline="handleDecline"
          :showFooter="false"
        >
          <template #userForm>
            <SignUpForm />
          </template>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Book } from '~/types/Book';

// Not: Modal Actions
const isModalOpen = ref(false);
const openModal = () => {
  isModalOpen.value = true;
};
const handleDecline = () => {
  console.log('Modal closed without submitting.');
};

// Not: Cart Actions
const shoppingCartList = useShoppingCartList();

let totalQuantity = ref<number>(0);
let totalPrice = ref<number>(0);

const totalCalculator = (value: any) => {
  let counter: number = 0;
  let price: number = 0;

  value?.map((item: Book) => {
    if (item.count) {
      counter = counter + item.count;
      price = price + item.price * item.count;
    }
  });

  totalQuantity.value = counter;
  totalPrice.value = price;
};

watch(
  () => shoppingCartList.value,
  (newValue: any) => {
    totalCalculator(newValue);
  },
  { deep: true }
);

onMounted(() => {
  totalCalculator(shoppingCartList.value);
});
</script>

<style scoped></style>
