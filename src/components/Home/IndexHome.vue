<template>
  <div>
    <div
      class="h-screen flex justify-center"
      style="padding: 0; margin: 0; font-size: 50px; width: 100%"
    >
      <div class="w-10/12">
        <div
          class="
            mt-7
            h-auto
            w-full
            text-ellipsis
            grid grid-cols-4
            gap-5
            sm:grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          <div
            v-for="item in publication"
            :key="item.uuid"
            style="height: 70vh; width: 100%"
          >
            <CardItem />
          </div>
        </div>
      </div>
    </div>

    <div class="buttonAdd">
      <button class="bg-black text-gray-100 w-32 rounded-md" @click="addNewDiv">
        ADD
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import Publication from "../../types/publication";
import { PlusIcon } from "@heroicons/vue/solid";
import CardItem from "../Card/CardItem.vue";

export default defineComponent({
  setup() {
    const publication = ref<Publication[]>([]);

    function addNewDiv() {
      publication.value.push({
        uuid: "",
        idEnterprise: "",
        description: "",
        img: "",
        originalValue: 0,
        promotionalValue: 0,
        discountPercentage: "",
        gain: 0,
      });
    }

    return {
      publication,
      addNewDiv,
    };
  },
  components: {
    PlusIcon,
    CardItem,
  },
});
</script>

<style>
.buttonAdd {
  z-index: 1;
  position: fixed;
  left: 80%;
  top: 90%;
}
</style>
