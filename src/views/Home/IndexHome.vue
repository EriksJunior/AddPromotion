<template>
  <div
    class="h-screen flex justify-center"
    style="padding: 0; margin: 0; font-size: 50px; width: 100%"
  >
    <div class="w-10/12" style="border: solid 1px red">
      <div class="flex justify-center space-x-40 my-5 mt-5 text-ellipsis">
        <div class="text-white">
          <p>Aqui é a home {{ publication.description }}</p>
        </div>

        <div class="text-black">
          <input type="text" v-model="publication.description" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Publication from "../../types/publication";

export default defineComponent({
  setup() {
    const publication = ref<Publication>({
      uuid: "",
      idEnterprise: "",
      description: "",
      img: "",
      originalValue: 0,
      promotionalValue: 0,
      discountPercentage: "",
      gain: 0,
    });

    const b = publication;

    return {
      publication,
    };
  },
});
</script>

<style>
</style>
