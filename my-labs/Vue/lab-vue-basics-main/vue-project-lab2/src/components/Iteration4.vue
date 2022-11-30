<template>
  <div>
    <h3>Iteration 4</h3>
    <ul v-for="(day, index) in myObject" :key="index">
      <li>{{ day.title }}</li>
      <li>{{ day.description }}</li>
      <li>{{ day.content }}</li>
    </ul>
    <hr />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const myObject = reactive([
  {
    title: "Day1",
    description: "Monday",
    content: "Worst Day",
  },
  {
    title: "Day2",
    description: "Tuesday",
    content: "Less Worst Day",
  },
  {
    title: "Day3",
    description: "Wednesday",
    content: "Less less Worst Day",
  },
  {
    title: "Day4",
    description: "Thursday",
    content: "It seems like light is coming..",
  },
]);
</script>

<style></style>
