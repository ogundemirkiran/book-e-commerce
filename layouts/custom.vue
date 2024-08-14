<template>
  <div class="min-h-screen flex flex-col">
    <header class="sticky top-0 z-50 bg-white text-black py-4 px-6">
      <div class="container mx-auto flex justify-between items-center">
        <nuxt-link to="/"
          ><h1 class="text-2xl font-bold">Book E-Commerce</h1></nuxt-link
        >

        <nav>
          <ul class="flex space-x-4">
            <li><nuxt-link to="/basket">Basket</nuxt-link></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="flex-1 container mx-auto p-6">
      <NuxtPage />
    </main>

    <footer class="bg-black text-white py-4 text-center">
      <p>&copy; 2024 Book E-Commerce. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped></style>
