<template>
  <div>
    <h3>Iteration 2.2</h3>
    <p>v0.1 -> {{ myString }}</p>

    <span>v0.2 -> </span>
    <span v-text="myString"></span>

    <p>v0.3 -> {{ textFunction() }}</p>

    <!-- MODELO PARA CONECTARSE A INPUTS (V-MODEL) -->
    <h4>-Alternative-</h4>
    <input type="text" v-model="num1" />
    <span> + </span>
    <input type="text" v-model="num2" />
    <!-- REFERENCIA ABAJO EN SCRIPT RESULT() -->
    <p>El resultado es {{ result }}</p>

    <hr />
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

let myString = "Hola que hase";

const textFunction = () => {
  return "Hola que hase";
};

// MODELO V-INPUT DIEGO's LESSON
const num1 = ref("0");
const num2 = ref("0");

//MODELO COMPUTED() REGISTRA A TIEMPO REAL LAS MODIFICACIONES DEL DOM PARA EJECUTAR EN ESTE CASO LA OPERACION DE ABAJO.
const result = computed(() => {
  return parseInt(num1.value) + parseInt(num2.value);
});
</script>

<style></style>
