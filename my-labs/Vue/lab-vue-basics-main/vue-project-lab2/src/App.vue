<script setup>
import { RouterLink, RouterView } from "vue-router";
import Iteration1NavbarVue from "./components/Iteration-1-navbar.vue";
import Iteration1footer from "./components/Iteration-1-footer.vue";
import Iteration2math from "./components/Iteration2-math.vue";
import Iteration2string from "./components/Iteration2-string.vue";
import Iteration3 from "./components/Iteration3.vue";
import Iteration4 from "./components/Iteration4.vue";
import Iteration5 from "./components/Iteration5.vue";
</script>

<template>
  <div>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <Iteration1NavbarVue />
    <main>
      <Iteration2math />
      <Iteration2string />
      <Iteration3 />
      <Iteration4 />
      <Iteration5 />
    </main>
    <Iteration1footer />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
