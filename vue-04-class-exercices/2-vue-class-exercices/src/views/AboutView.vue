<template>
  <div>
    <h1>Peliculas favoritas</h1>
    <ol v-for="(movie, index) in prefPelis.prefMovies">
      <li>{{ index }}-{{ movie }}</li>
    </ol>

    <hr />

    <ul v-for="(favorite, key) in favoriteThings">
      <li>{{ key }}: {{ favorite }}</li>
    </ul>

    <hr />

    <ul>
      <li v-for="(students, index) in students" :key="index">
        <div v-if="students.age >= 18">
          <p>I can go for drinks with {{ students.name }} afeter class.</p>
        </div>
        <div v-else>
          <p>
            {{ students.name }} is still young, they'll have to go home tonight
          </p>
        </div>
        <ul>
          <li v-for="lenguaje in students.favoriteLanguages" v-bind="key">
            {{ lenguaje }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const prefPelis = reactive({
  prefMovies: [
    "Interestellar",
    "Animales Fantásticos",
    "El efecto mariposa",
    "Como entrenar a tu dragon",
    "Soul",
  ],
});

const favoriteThings = reactive({
  favoriteFood: "Pizza",
  favoriteDrink: "Gin tonic",
  favoriteSport: "Football(American)",
  favoriteCountry: "Thailand",
  favoriteArrayMethod: "None",
});

const students = reactive([
  {
    name: "Sussy",
    age: 20,
    favoriteLanguages: ["Catalan", " Gallego"],
  },
  {
    name: "Matt",
    age: 20,
    favoriteLanguages: ["Catalan", "Euskera", "English"],
  },
  {
    name: "Jake",
    age: 33,
    favoriteLanguages: ["Italian", "French"],
  },
]);
</script>

<style>
ol {
  list-style: none;
}
hr {
  margin: 5% 0;
}
</style>

<!-- // Ej.3***: Creamos una variable reactiva students que contenga un array con al menos tres objetos. Cada objeto representará uno de vuestros compañeros y tendrá las keys name (string), age(number) y favoriteLanguages(array de strings). Tendremos que recorrer el array en el template y para cada objeto printear el nombre de vuestro compañero. Según si su edad es mayor o menor a 18 printearemos "I can go for a few drinks with NAME after class" o "NAME is still too young, they'll have to go home tonight". Finalmente, loopeamos el array de sus lenguajes de programación favoritos dentro de una unordered list. -->

<!-- // Ej.1: Creamos una variable reactiva que contenga un array con vuestras cinco películas preferidas. En el template pondremos un título de My favorite Movies y después una <ol>. Dentro de la ordered list recorreremos el array de películas y crearemos un <li> para cada una que nos las printee en pantalla. A cada <li> le daremos el index del elemento en el array como key. -->

<!-- // Ej.2:  Creamos una variable reactiva que contenga un objeto con cinco keys: favoriteFood, favoriteDrink, favoriteSport, favoriteCountry y favoriteArrayMethod. En el template vamos a recorrer el objeto para mostrar cada key y su valor en una unoredered list (en pantalla deberíamos ver algo como "favoriteFood: Sushi"). -->
