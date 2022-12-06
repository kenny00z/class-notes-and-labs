<template>
  <div>
    <form @submit.prevent="primaveraSoundAlert">
      <div>
        <label for="name">Enter your name here</label>
        <input type="text" id="name" v-model="primaveraSound.name" />
      </div>
      <div>
        <label for="email">Enter your email here</label>
        <input type="email" name="email" id="email-input" />
        <div>
          <label for="artist">Artists do you want to see</label>
          <select
            name="artist"
            id="artist"
            multiple
            v-model="primaveraSound.artist"
          >
            <option value="Blur">Blur</option>
            <option value="Skrillex">Skrillex</option>
            <option value="Sparks">Sparks</option>
            <option value="Four Tet">Four Tet</option>
            <option value="Pusha T">Pusha T</option>
          </select>
        </div>
        <div>
          <label for="consum">Do you consume some magics?</label>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const primaveraSound = reactive({
  forName: "",
  forEmail: "",
  artist: [],
  consum: true,
  clothes: true,
  age: true,
  crew: true,
  message: "",
});

function primaveraSoundAlert() {
  console.log("Form values", primaveraSound);
  alert(``);
}
</script>

<style>
div {
  margin: 10% 0;
}
</style>
