<template>
  <div>
    <button @click="piniaTrueCounter.counterSuma()">+</button>
    <button @click="piniaTrueCounter.counterResta()">-</button>
    <p>{{ piniaTrueCounter.count }}</p>
  </div>
</template>

<script setup>
import { piniaCounter } from "../store/counter";
import { ref } from "vue";
const piniaTrueCounter = piniaCounter();
// const count = ref(piniaTrueCounter.count); NO HACE FALTA
</script>
