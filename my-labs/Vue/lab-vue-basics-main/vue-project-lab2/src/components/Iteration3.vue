<template>
  <div>
    <h3>Iteration 3.1 (v-if)</h3>
    <p v-if="myBoolean">
      Hola soy un template oculto pero no tan oculto la verdad...
    </p>
    <p v-else>Estoy oculto por ser un falso..</p>
    <hr />
    <h3>Iteration 3.2 (v-show)</h3>
    <p v-show="myBoolean2">
      Estoy con v-show así que soy rarete y solo obedezco booleans ;) y si me
      llamas falso me ocultare :(
    </p>
    <hr />
  </div>
</template>

<script setup>
import { ref } from "vue";

let myBoolean = ref(true);

const myBoolean2 = ref(true);
</script>

<style></style>
