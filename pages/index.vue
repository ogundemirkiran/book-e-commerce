<template>
  <div>
    <div
      v-if="filteredBookList.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-4"
    >
      <div v-for="book in filteredBookList" :key="book.id">
        <BookCard :book="book" />
      </div>
    </div>
    <div v-else class="text-center mt-5">Book not found.</div>
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
const filteredBookList = useFilteredBookList();

onMounted(() => {
  localStorage.setItem("bookList", JSON.stringify(bookList.value));

})
</script>
