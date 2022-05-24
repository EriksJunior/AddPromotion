<template>
  <div class="containerNav">
    <PlusIcon style="cursor: pointer; width: 70px" />

    <PlusIcon style="cursor: pointer; width: 70px" class="mt-2" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PlusIcon } from "@heroicons/vue/solid";

export default defineComponent({
  components: {
    PlusIcon,
  },
});
</script>

<style>
.containerNav {
  background-color: black;
  width: 6%;
  height: 100%;
  border-top-right-radius: 40%;
  border-bottom-right-radius: 40%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
}
</style>
