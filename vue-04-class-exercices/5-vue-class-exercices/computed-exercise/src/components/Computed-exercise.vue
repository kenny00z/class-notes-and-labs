<template>
  <div>
    <div>
      <h1>Class Computed Exercise</h1>
    </div>
    <div>
      <h1>Iteration 1</h1>
      <div v-for="(myWatch, index) in myWatchList" :key="index">
        <h2>{{ myWatch.title }}</h2>
        <h3>{{ myWatch.year }}</h3>
        <ul>
          <li v-for="(streaming, index) in myWatch.whereToWatch" :key="index">
            {{ streaming }}
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <h1>Iteration2</h1>
        <div v-for="(myWatch, index) in watchOnNetflix" :key="index">
          <h2>{{ myWatch.title }}</h2>
          <h3>{{ myWatch.year }}</h3>
          <ul>
            <li v-for="(streaming, index) in myWatch.whereToWatch" :key="index">
              {{ streaming }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

const myWatchList = reactive([
  {
    title: "Animales fantásticos: Los secretos de Dumbledore",
    year: 2022,
    whereToWatch: ["Netflix", "Cine", "Piratilla"],
  },
  {
    title: "Moonfall",
    year: 2022,
    whereToWatch: ["Netflix", "Cine", "Piratilla"],
  },
  {
    title: "La chica salvaje",
    year: 2022,
    whereToWatch: ["Cine", "Piratilla"],
  },
  {
    title: "The Deer King",
    year: 2022,
    whereToWatch: ["Netflix", "Cine", "Piratilla"],
  },
]);

const watchOnNetflix = computed(() => {
  return myWatchList.filter((movieInNetflix) =>
    movieInNetflix.whereToWatch.includes("Netflix")
  );
});
</script>

<!-- REF NECESITA EL .VALUE
  return myWatchList.filter.value((movieInNetflix)
 REACTIVE NO 
 return myWatchList.filter((movieInNetflix)
-->

<!-- Creamos una variable reactiva myWatchlist que contenga un array de objetos. Cada objeto representa una serie o película que queráis ver en el futuro, y debería contar con las keys title (string), year (number) y whereToWatch (array de Strings). En el browser deberíais printear, para cada uno de los obejtos, un <h1> con el title, un <h2> con el year y una unordered list para los servicios de streaming (Netflix, HBO, etc.). Después deberíamos tener una variable computada watchOnNetflix que filtre el array de myWatchlist según si la key whereToWatch incluye la string "Netflix". En el template también deberíamos renderizar watchOnNetflix con un título para separar las dos listas. -->
