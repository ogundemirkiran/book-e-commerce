<template>
  <div
    v-if="error.statusCode === 404"
    class="flex flex-col items-center justify-center h-screen text-center bg-gray-100"
  >
    <img
      src="@/assets/images/notFound.png"
      class="inline me-3"
      alt="Complete"
    />
    <p class="mt-4 text-xl text-gray-700">
      Oops! The page you're looking for doesn't exist.
    </p>
    <nuxt-link
      to="/"
      class="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
    >
      Go Back Home
    </nuxt-link>
  </div>
  <div v-else>
    <h1 class="text-center">{{ error.statusCode }} - {{ error.message }}</h1>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  error: {
    type: Object,
    default: () => ({ statusCode: 404, message: 'Page not found' })
  }
});
</script>
