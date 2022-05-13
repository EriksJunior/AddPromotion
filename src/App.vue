<template>
  <NavComp />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavComp from "./components/Nav/NavComp.vue";

export default defineComponent({
  components: { NavComp },
});
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: rgb(24, 24, 24);
}
</style>
