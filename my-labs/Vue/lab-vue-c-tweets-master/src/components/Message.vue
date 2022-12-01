<template>
  <p class="message">
    {{ dogTweets.message }}
  </p>
</template>

<script setup>
const dogTweets = defineProps({
  message: String,
});
</script>
