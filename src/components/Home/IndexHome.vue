<template>
  <div
    class="h-screen flex justify-center"
    style="padding: 0; margin: 0; font-size: 50px; width: 100%"
  >
    <div class="w-10/12">
      <div
        id="containerGeneral"
        class="my-5 mt-3 text-ellipsis grid grid-cols-4 gap-5"
        ref="containerGeneral"
        v-for="item in publication"
        :key="item.uuid"
      >
        <CardItem />
      </div>
      <button
        style="background-color: white; border-radius: 10px; width: 200px"
        @click="addNewDiv"
      >
        ADD
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, h } from "vue";
import Publication from "../../types/publication";
import { PlusIcon } from "@heroicons/vue/solid";
import CardItem from "../Card/CardItem.vue";

export default defineComponent({
  setup() {
    const publication = ref<Publication | Publication[]>({
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
    CardItem,
  },
});
</script>

<style>
.cardPromotion {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 55vh;
}

.imgItem {
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: rgba(131, 121, 189, 0.118);
}

.descriptionItem {
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
  color: #dcdbdb;
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
#containerGeneral {
  border: solid 2px red;
  height: 80vh;
}
</style>
