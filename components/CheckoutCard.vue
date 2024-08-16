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
    </div>

    <!--NOT: Form -->
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label
          for="firstName"
          class="block text-gray-700 font-semibold mb-2 text-sm sm:text-md"
          >Name:</label
        >
        <input
          id="firstName"
          v-model="firstName"
          type="text"
          class="w-full p-2 border border-gray-300 rounded text-sm sm:text-md"
          autocomplete="off"
        />
      </div>
      <div class="mb-4">
        <label
          for="lastName"
          class="block text-gray-700 font-semibold mb-2 text-sm sm:text-md"
          >Surname:</label
        >
        <input
          id="lastName"
          v-model="lastName"
          type="text"
          class="w-full p-2 border border-gray-300 rounded text-sm sm:text-md"
          autocomplete="off"
        />
      </div>
      <div class="mb-4 flex items-center">
        <input
          id="kvkk"
          v-model="kvkkAccepted"
          type="checkbox"
          class="mr-2"
          autocomplete="off"
        />
        <label for="kvkk" class="text-gray-700 text-sm sm:text-md"
          >I accept KVKK</label
        >
      </div>

      <!-- NOT: Buy -->
      <button
        type="submit"
        :disabled="!isFormValid"
        class="w-full py-2 px-4 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded disabled:opacity-50"
      >
        Buy
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { Book } from '~/types/Book';

const router = useRouter();
const shoppingCartList = useShoppingCartList();

let totalQuantity = ref<number>(0);
let totalPrice = ref<number>(0);

// NOT: Form state
const firstName = ref('');
const lastName = ref('');
const kvkkAccepted = ref(false);

// Not: Form validate
const isFormValid = computed(() => {
  return (
    firstName.value.trim() !== '' &&
    lastName.value.trim() !== '' &&
    kvkkAccepted.value
  );
});

// NOT: Send form
const handleSubmit = () => {
  if (isFormValid.value) {
    useShoppingCart('clear');
    router.push('/completed');
  } else {
    alert('The form is not valid.');
  }
};

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
