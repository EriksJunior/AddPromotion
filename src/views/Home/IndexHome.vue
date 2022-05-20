<template>
  <div
    class="h-screen flex justify-center"
    style="padding: 0; margin: 0; font-size: 50px; width: 100%"
  >
    <div class="w-10/12" style="border: solid 1px red">
      <div
        class="my-5 mt-5 text-ellipsis grid grid-cols-3 gap-3"
        style="height: 95%"
      >
        <div class="border-2 flex justify-center items-center">
          <div>
            <PlusIcon class="border-2 cursor-pointer h-40 text-yellow-400" />
          </div>
        </div>

        <div class="border-2 flex justify-center items-center">
          <div>
            <PlusIcon class="border-2 cursor-pointer h-40 text-yellow-400" />
          </div>
        </div>

        <div class="border-2 flex justify-center items-center">
          <div>
            <PlusIcon class="border-2 cursor-pointer h-40 text-yellow-400" />
          </div>
        </div>

        <div class="border-2 flex justify-center items-center">
          <div>
            <PlusIcon class="border-2 cursor-pointer h-40 text-yellow-400" />
          </div>
        </div>

        <div class="border-2 flex justify-center items-center">
          <div>
            <PlusIcon class="border-2 cursor-pointer h-40 text-yellow-400" />
          </div>
        </div>

        <div class="border-2 flex justify-center items-center">
          <div>
            <PlusIcon class="border-2 cursor-pointer h-40 text-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Publication from "../../types/publication";
import { PlusIcon } from "@heroicons/vue/solid";

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

    return {
      publication,
    };
  },
  components: {
    PlusIcon,
  },
});
</script>

<style>
</style>
