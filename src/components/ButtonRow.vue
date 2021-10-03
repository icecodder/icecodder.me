<template>
  <div class="flex flex-wrap flex-row space-x-6 pt-3">
    <Button class="flex-1 bg-button-twitter" href="https://twitter.com/maxcharrier_" name="Twitter" />
    <Button class="flex-1 bg-button-github" href="https://github.com/icecodder" name="GitHub" />
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  components: {
    Button
  }
}
</script>
