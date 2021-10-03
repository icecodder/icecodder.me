<template>
  <div class="flex flex-col justify-center items-center h-screen space-y-3 bg-hero bg-cover bg-no-repeat">
    <p class="text-5xl text-white">Welcome to <a class="font-extrabold text-red-500 underline" href="/">{{ website }}</a>!</p>
    <p class="text-xl text-white">🚧 This website is under construction 🚧</p>
    <ButtonRow />
  </div>
</template>

<script>
import ButtonRow from "./components/ButtonRow.vue";

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
p {
  font-family: "Rubik", "Poppins", "sans-serif";
}
</style>
