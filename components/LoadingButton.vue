<template>
  <button
    class="flex items-center"
    :class="[buttonClass, { 'opacity-75': isLoading || props.isOk }]"
    @click="handleClick"
    :disabled="isLoading || props.isOk"
  >
    <img
      v-if="isLoading"
      src="@/assets/icons/loading.svg"
      class="inline w-4 h-4 me-3 animate-spin"
      alt="Loading"
    />
    <img
      v-if="isOk"
      src="@/assets/icons/check.svg"
      class="inline w-4 h-4 me-3"
      alt="Loading"
    />
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface Props {
  isLoading: boolean;
  isOk: boolean;
  buttonClass: string;
  onClick: () => void;
}

const props = defineProps<Props>();

const handleClick = () => {
  if (!props.isLoading || !props.isOk) {
    props.onClick();
  }
};
</script>
