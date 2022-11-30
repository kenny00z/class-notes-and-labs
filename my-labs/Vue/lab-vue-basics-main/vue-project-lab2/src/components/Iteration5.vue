<template>
  <div>
    <div
      class="container"
      :class="colorBoolean ? 'button-is-blue' : 'button-is-red'"
    >
      <h3>Iteration 5.1 (toggle color)</h3>

      <button @click="changeColor()">Click me!!</button>
    </div>
    <hr />
    <div class="container" :style="{ background: colors }">
      <h3>Iteration 5.2 (random color)</h3>
      <button @click="colors = randomColors()">Click me!!</button>
    </div>
    <hr />
    <div
      class="container"
      :class="myBooleanValue && 'myBooleanBackgroundColor'"
    >
      <h3>Iteration 5.3(asignación "&&")</h3>
      <button @click="clickMe()">Click me!!</button>
    </div>
    <hr />
    <div class="container" :class="myClassColor ? 'mi-clase-1' : 'mi-clase-2'">
      <h3>Iteration 5.4(EJERCICIO EXTRA DIEGO)</h3>
      <p>
        Este boton hará un toggle en el div contenedor que cambiará según el
        valor booleanico entre una clase o otra
      </p>
      <button @click="myClassColorChange()">Click me :(</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

// EJERCICIO EXTRA DIEGO
const myClassColor = ref(true);

const myClassColorChange = () => {
  myClassColor.value = !myClassColor.value;
  console.log(myClassColor.value);
};

const colorBoolean = ref(true);

const changeColor = () => {
  colorBoolean.value = !colorBoolean.value;
  // console.log(colorBoolean.value);
};

let colors = ref("orange");

const randomColors = () => {
  const hexElements = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexElements[Math.floor(Math.random() * 16)];
  }

  return color;
};

const myBooleanValue = ref(true);

const clickMe = () => {
  myBooleanvalue.value = !myBooleanvalue.value;
};
</script>

<style>
/* EJERCICIO EXTRA DIEGO */
.mi-clase-1 {
  background-color: rgb(10, 10, 90);
}
.mi-clase-2 {
  background-color: rgb(102, 8, 8);
}

/* EJERCICIO EXTRA DIEGO */

.container {
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button-is-blue {
  background-color: rgb(7, 70, 70);
}
.button-is-red {
  background-color: rgb(105, 18, 18);
}
.myBooleanBackgroundColor {
  background: blue;
  color: rgb(9, 182, 38);
}
</style>
