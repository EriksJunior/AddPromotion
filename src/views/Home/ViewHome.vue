<template>
  <div>
    <IndexHome />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import IndexHome from "../../components/Home/IndexHome.vue";

export default defineComponent({
  components: {
    IndexHome,
  },
});
</script>

<style>
</style>