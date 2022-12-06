<template>
  <h2>{{ nameReactive.name }}</h2>
</template>

<script setup>
import { ref, reactive } from "vue";

const nameReactive = reactive({
  name: "Yisus",
});

// const changeName = (namechanged) => {};
</script>
