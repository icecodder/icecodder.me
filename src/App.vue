<template>
  <div class="flex flex-col h-screen bg-hero bg-cover bg-no-repeat">
    <NavBar />
    <Header />

    <About />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Header from "./components/Header.vue";
import About from "./components/About.vue";

export default {
  components: {
    NavBar,
    Header,
    About
  }
}
</script>
