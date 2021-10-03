<template>
  <a class="px-6 py-2 font-black text-white shadow-2xl" :href="href">{{ name }}</a>
</template>

<script>
export default {
  props: {
    name: String,
    href: String
  }
}
</script>

<style scoped>
a {
  font-family: "Rubik", "Poppins", "sans-serif";
}
</style>

