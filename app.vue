<template>
  <div>
    <NuxtLayout name="custom">
      <NuxtLoadingIndicator color="#0000ff" height="5" />
      <NuxtPage />
      <NuxtSnackbar />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
useHead({
  title: 'Online Book Store | Buy Books Online ',
  meta: [
    {
      name: 'description',
      content:
        'Discover a wide range of books in various categories. Buy books online with fast shipping and great discounts at Your Store Name.'
    },
    {
      name: 'keywords',
      content:
        'buy books online, best books to read, book store, online bookshop, latest books, book deals'
    },
    { name: 'author', content: 'book commerce' },
    { name: 'language', content: 'en' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Online Book Store | Buy Books Online' },
    {
      property: 'og:description',
      content:
        'Find your next great read with our collection of books across various genres. Shop now at Your Store Name.'
    },
    { property: 'og:url', content: 'https://localhost:3000' },
    { name: 'twitter:title', content: 'Online Book Store | Buy Books Online' },
    {
      name: 'twitter:description',
      content:
        'Explore a wide range of books online at Your Store Name. Get the best prices and discounts on your favorite titles.'
    },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
    { rel: 'canonical', href: 'https://localhost:3000' }
  ]
});

import type { Book } from './types/Book';

const shoppingCartList = useShoppingCartList();

onMounted(() => {
  const localList: Book[] | null = localStorage.getItem('shoppingCartList')
    ? JSON.parse(localStorage.getItem('shoppingCartList') || '[]')
    : null;

  if (localList) {
    shoppingCartList.value = localList;
  }
});
</script>
