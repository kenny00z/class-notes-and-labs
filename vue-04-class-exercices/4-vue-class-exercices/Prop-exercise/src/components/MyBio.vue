<template>
  <div>
    <div>
      <!-- <h1>Props class exercice</h1>
      <h2>{{ name }}</h2>
      <h3>{{ age }}</h3>
      <h3>{{ birthPlace }}</h3>
      <h3>{{ currentLocation }}</h3> -->
    </div>
    <div>
      <NameComponent :name="name" />
      <AgeComponent :age="age" />
      <BirthComponent :birthPlace="birthPlace" />
      <LocationComponent :currentLocation="currentLocation" />
    </div>
  </div>
</template>

<script setup>
import { propsToAttrMap } from "@vue/shared";
import NameComponent from "./Mybiocomps/namecomp.vue";
import AgeComponent from "./Mybiocomps/agecomp.vue";
import BirthComponent from "./Mybiocomps/birthplacecomp.vue";
import LocationComponent from "./Mybiocomps/locationcomp.vue";

// DENTRO DEL METODO DEFINEPROPS() CREAMOS UN OBJETO CON SUS RESPECTIVAS KEYS LAS CUALES CONTIENE UN OBJETO CON SU TYPE; SI ES NECESARIO UN REQUISITO; Y UN DEFAULT.

defineProps({
  name: {
    type: String,
    required: false,
    default: "Some Random Name",
  },
  age: {
    type: Number,
    default: 0,
  },
  birthPlace: {
    type: String,
  },
  currentLocation: {
    type: String,
    required: true,
    default: "Barcelona, España",
  },
});
</script>

<style></style>
