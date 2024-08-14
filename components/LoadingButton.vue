<template>
  <button
    class="flex items-center"
    :class="buttonClass"
    @click="handleClick"
    :disabled="isLoading"
  >
    <img
      v-if="isLoading"
      src="@/assets/icons/loading.svg"
      class="inline w-4 h-4 me-3 animate-spin"
      alt="Loading"
    />
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface Props {
  isLoading: boolean;
  buttonClass: string;
  onClick: () => void;
}

const props = defineProps<Props>();

const handleClick = () => {
  if (!props.isLoading) {
    props.onClick();
  }
};
</script>
