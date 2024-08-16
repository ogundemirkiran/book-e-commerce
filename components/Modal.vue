<template>
  <div
    v-if="isOpen"
    id="default-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 right-0 left-0 z-50 w-full h-full overflow-y-auto overflow-x-hidden flex items-center justify-center"
  >
    <!-- NOT: Background dark -->
    <div
      class="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-50"
    ></div>

    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- NOT:  Modal header -->
        <div
          class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ title }}
          </h3>

          <img
            @click="closeModal"
            src="@/assets/icons/close.svg"
            class="inline w-3 h-3 me-3 text-gray-400 m-auto cursor-pointer"
            alt="Close"
          />
        </div>
        <!-- NOT: Modal body -->
        <div class="p-4 space-y-4">
          <slot name="userForm"></slot>
        </div>
        <!-- NOT: Modal footer -->
        <div
          v-if="showFooter"
          class="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            @click="confirmAction"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {{ confirmText }}
          </button>
          <button
            @click="closeModal"
            type="button"
            class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            {{ declineText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  title: String,
  confirmText: {
    type: String,
    default: 'Confirm'
  },
  declineText: {
    type: String,
    default: 'Decline'
  },
  showFooter: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['update:isOpen', 'confirm', 'decline']);

const closeModal = () => {
  emit('update:isOpen', false);
};

const confirmAction = () => {
  emit('confirm');
  closeModal();
};
</script>
