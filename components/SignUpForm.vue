<template>
  <!-- NOT: Without Register -->
  <div
    class="flex items-center justify-end text-xs sm:text-md text-gray500 underline cursor-pointer mb-3"
    @click="withoutRegister"
  >
    <p>Buy without registration</p>
    <img
      src="@/assets/icons/rightArrow.svg"
      class="inline w-3 h-3 me-3 ml-1 text-gray500"
      alt="RightArrow"
    />
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
</template>

<script lang="ts" setup>
const router = useRouter();

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

const withoutRegister = () => {
  useShoppingCart('clear');
  router.push('/completed');
};
</script>
