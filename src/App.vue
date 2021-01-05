<template>
  <div id="app">
    <ic-button></ic-button>
    <ic-button-group></ic-button-group>
    <ic-icon></ic-icon>
    <Button></Button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Button from "./examples/button";
export default defineComponent({
  components: {
    Button,
  },
});
</script>

<style lang="scss"></style>
