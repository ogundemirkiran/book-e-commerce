<template>
  <div
    class="mt-1 sm:mt-5 max-w-sm p-2 pt-4 m-auto text-center bg-white border border-gray-200 rounded-lg shadow"
  >
    <img
      src="@/assets/images/complete.png"
      class="inline me-3"
      alt="Complete"
    />

    <h5
      class="mt-2 text-xl sm:text-4xl font-semibold tracking-tight text-green-600"
    >
      Completed Successfully
    </h5>
    <br />
    <nuxt-link to="/" class="mt-5">
      <button
        type="button"
        class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Continue Shopping
      </button>
    </nuxt-link>
  </div>
</template>
