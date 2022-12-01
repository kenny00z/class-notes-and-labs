<template>
  <span class="user">
    <span class="name">{{ dogTweets.userData.name }}</span>
    <span class="handle">@{{ dogTweets.userData.handle }}</span>
  </span>
</template>

<script setup>
const dogTweets = defineProps({
  userData: Object,
});
</script>
