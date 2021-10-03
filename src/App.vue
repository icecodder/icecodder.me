<template>
  <div class="flex flex-col h-screen bg-hero bg-center bg-no-repeat bg-cover">
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
