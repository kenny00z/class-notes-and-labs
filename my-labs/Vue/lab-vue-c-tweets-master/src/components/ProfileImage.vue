<template>
  <img :src="dogTweets.image" class="profile" alt="profile" />
</template>

<script setup>
const dogTweets = defineProps({
  image: String,
});
</script>
