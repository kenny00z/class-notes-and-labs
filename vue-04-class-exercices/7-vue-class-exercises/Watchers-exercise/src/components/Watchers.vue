<template>
  <div>
    <h2>pregunta</h2>

    <input type="text" v-model="answer" maxlength="3" />
    <p v-if="jsonResponse">{{ jsonResponse }}</p>
    <p v-if="jsonUserResponse">{{ jsonUserResponse }}</p>
    <img v-if="jsonImage" v-bind:src="jsonImage" alt="gift" />
    <!-- imagen del json -->
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from "vue";
import jsonAnswers from "./JsonAnswers.json";

const question = ref("");
const answer = ref("");
const jsonResponse = ref("");
const jsonUserResponse = ref("");
const jsonImage = ref("");

watch(answer, async (newAnswer) => {
  if (answer.value.toLowerCase() === "yes") {
    jsonResponse.value =
      jsonAnswers[0].response + ", te encata la pizza y la pizza te adora!";
    jsonImage.value = jsonAnswers[0].image;
    jsonUserResponse.value = jsonAnswers[0].userResponse;
  } else if (answer.value.toLowerCase() === "no") {
    jsonResponse.value =
      jsonAnswers[1].response + ", a quien no le gusta la pizza!";
    jsonImage.value = jsonAnswers[1].image;
    jsonUserResponse.value = jsonAnswers[1].userResponse;
  } else {
    jsonResponse.value =
      jsonAnswers[2].response + "porfavor dame una respuesta correcta...";
    jsonImage.value = jsonAnswers[2].image;
    jsonUserResponse.value = jsonAnswers[2].userResponse;
  }
});

// watch(answer, async (newAnswer, oldAnswer) => {
//   if (newAnswer === "yes") {
//     answer.value = "Yey, te gusta la pizza!";
//   } else if (newAnswer === "no") {
//     answer.value = "Que raro eres";
//   }
// });
</script>
<!-- // Crea un componente que haga lo siguiente:
// 1- Te pregunte si te gusta la pizza inyectando la pregunta en un HTML.
// 2- De la respuesta en función a un JSON que debes crear
// 3- El JSON será un archivo local que conteste "Yey, te gusta la pizza" si dices que sí, "Que raro eres" si dices que no y "contéstame bien" si contestas cualquier otra cosa.
// 4- Junto a la contestación, debe aparecer una imagen divertida -->
