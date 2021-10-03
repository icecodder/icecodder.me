<template>
  <header class="flex-grow flex flex-col justify-center items-center space-y-3">
    <p class="text-5xl text-white">Bienvenue sur <a class="font-extrabold text-yellow-400 underline" href="/">{{ website }}</a></p>
    <p class="text-xl text-white">🚧 Ce site web est en cours de construction 🚧</p>
    <ButtonRow />
  </header>
</template>

<script>
import ButtonRow from "./ButtonRow.vue";

export default {
  data() {
    return {
      website: "icecodder.me"
    }
  },
  components: {
    ButtonRow
  }
}
</script>

<style scoped>
a, p {
  font-family: "Rubik", "Poppins", "sans-serif";
}
</style>
