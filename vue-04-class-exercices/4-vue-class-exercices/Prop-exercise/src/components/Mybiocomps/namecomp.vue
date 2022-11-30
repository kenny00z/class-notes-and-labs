<template>
  <div>
    <h2>{{ name }}</h2>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: false,
    default: "Some Random Name",
  },
});
</script>

<style></style>
