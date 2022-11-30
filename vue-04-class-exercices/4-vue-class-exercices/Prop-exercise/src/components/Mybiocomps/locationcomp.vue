<template>
  <h3>{{ currentLocation }}</h3>
</template>
<script setup>
defineProps({
  currentLocation: {
    type: String,
    required: true,
    default: "Barcelona, España",
  },
});
</script>
