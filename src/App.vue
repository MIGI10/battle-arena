<script setup>

</script>

<template>
  <nav>
    <router-link to="/">Initial</router-link>
    <router-link to="/main">Main</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/join">Join</router-link>
    <router-link to="/store">Store</router-link>
    <router-link to="/games">Games</router-link>
    <router-link to="/gameplay">Gameplay</router-link>
    <router-link to="/gamehistory">GameHistory</router-link>
    <router-link to="/changeattacks">ChangeAttacks</router-link>
    <router-link to="/gamerecord">GameRecord</router-link>
  </nav>

  <router-view></router-view>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
