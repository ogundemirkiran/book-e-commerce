<template>
  <div class="p-6 bg-white rounded-lg shadow-lg">
    <!-- Sepet Toplamı ve Adeti -->
    <div class="mb-4">
      <h2 class="text-xl font-bold text-gray-900 mb-2">Sepet Toplamı</h2>
      <div class="flex justify-between mb-2">
        <span class="text-gray-700">Toplam Kitap Sayısı:</span>
        <span class="font-semibold text-gray-900">{{ totalQuantity }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-700">Toplam Tutar:</span>
        <span class="font-semibold text-gray-900"
          >$ {{ totalPrice.toFixed(2) }}</span
        >
      </div>
    </div>

    <!-- Form -->
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="firstName" class="block text-gray-700 font-semibold mb-2"
          >İsim:</label
        >
        <input
          id="firstName"
          v-model="firstName"
          type="text"
          placeholder="İsminizi girin"
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div class="mb-4">
        <label for="lastName" class="block text-gray-700 font-semibold mb-2"
          >Soyisim:</label
        >
        <input
          id="lastName"
          v-model="lastName"
          type="text"
          placeholder="Soyisminizi girin"
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div class="mb-4 flex items-center">
        <input id="kvkk" v-model="kvkkAccepted" type="checkbox" class="mr-2" />
        <label for="kvkk" class="text-gray-700">KVKK Onayını Veriyorum</label>
      </div>
      <button
        type="submit"
        :disabled="!isFormValid"
        class="w-full py-2 px-4 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded disabled:opacity-50"
      >
        Satın Al
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

// Sepet verileri (Bu örnekte sabit değerler kullandık, gerçek uygulamada dinamik olmalıdır)
const totalQuantity = computed(() => 5); // Toplam kitap sayısı
const totalPrice = computed(() => 99.95); // Toplam tutar

// Form verileri
const firstName = ref("");
const lastName = ref("");
const kvkkAccepted = ref(false);

// Formun geçerliliğini kontrol eden computed property
const isFormValid = computed(() => {
  return (
    firstName.value.trim() !== "" &&
    lastName.value.trim() !== "" &&
    kvkkAccepted.value
  );
});

// Form gönderim fonksiyonu
const handleSubmit = () => {
  if (isFormValid.value) {
    // Form verileri gönderilebilir
    console.log("Form gönderildi");
  } else {
    // Hata mesajı veya kullanıcıya uyarı verilebilir
    console.error("Form geçerli değil");
  }
};
</script>

<style scoped>
/* İsteğe bağlı stil ayarları */
</style>
