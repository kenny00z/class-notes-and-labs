<!-- ITERATION #1 & #2 -->
<template>
    <div>
        <h2>Hello there, I'm {{name}} and I'm an {{status}}!</h2>
        <p>I'm {{id.age}} years old, I like to practise {{id.hobbie}}.
        Currently I'm coursing as a {{id.status2}} a {{id.course}} course on {{id.place}}!!</p>
    </div>
    <button @click="helloWorld">Click me!</button>



</template>

<script setup>
import { ref,reactive } from 'vue';

const name = ref("Yisus");
const status = ref("Ironhacker");


const id = reactive({
    age: 30,
    hobbie: "Martial arts",
    status2: "Student",
    course: "Coding",
    place: "Ironhack"
});

const helloWorld = () => {

    console.log("hello world!");
};

</script>

<style></style>