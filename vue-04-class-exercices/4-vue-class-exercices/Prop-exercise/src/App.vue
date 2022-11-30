<script setup>
import MyBio from "./components/MyBio.vue";
</script>

<template>
  <div>
    <div>
      <img
        alt="Vue logo"
        class="logo"
        src="./assets/logo.svg"
        width="125"
        height="125"
      />
    </div>
    <div>
      <MyBio
        name="Yisus"
        age="30"
        birthPlace="Sabadell, España"
        currentLocation="Sabadell, Cataluña"
      />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
}
</style>
