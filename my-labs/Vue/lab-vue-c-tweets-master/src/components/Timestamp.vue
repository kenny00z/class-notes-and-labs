<template>
  <span class="timestamp">{{ dogTweets.timestamp }}</span>
</template>

<script setup>
const dogTweets = defineProps({
  timestamp: String,
});
</script>
