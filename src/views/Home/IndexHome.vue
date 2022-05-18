<template>
  <div
    class="h-screen flex justify-center"
    style="padding: 0; margin: 0; font-size: 50px; color: #ffd700; width: 100%"
  >
    <div class="w-10/12" style="border: solid 1px red">
      <div class="flex justify-center space-x-40 my-5 mt-5">
        <div>
          <p>Aqui é a home</p>
        </div>

        <div>
          <input type="text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const state = reactive({
      name: "EriksJunior" as string,
      email: "zé@gmail.com" as string,
    });

    return {
      state,
    };
  },
});
</script>

<style>
</style>
