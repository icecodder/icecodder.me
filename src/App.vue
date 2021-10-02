<template>
  <div class="flex flex-col justify-center items-center h-screen space-y-3">
    <p class="text-5xl font-light">Welcome to <span class="font-extrabold text-green-500 underline">{{ website }}</span>!</p>
    <p class="text-xl font-thin">🚧 This website is under construction 🚧</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      website: "icecodder.me"
    }
  }
}
</script>

<style scoped>
p {
  font-family: "Rubik", "Poppins", "sans-serif";
}
</style>
