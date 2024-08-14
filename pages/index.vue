<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-4"
  >
    <div v-for="book in bookList" :key="book.id">
      <BookCard :book="book" />
    </div>
  </div>
</template>
;

<script lang="js" setup>



useHead({
    title: "booksTitle",
    ogTitle: "ogBooksTitle",
    description: "descriptionBooks",
    ogDescription: "ogDescriptionBooks",

})

await useGetBookList()

const bookList = useBookList();

onMounted(() => {
  localStorage.setItem("bookList", JSON.stringify(bookList.value));

})
</script>
