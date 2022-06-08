<template>
  <div>
    <div class="h-screen w-full" style="padding: 0; margin: 0; font-size: 50px">
      <div class="w-full">
        <div
          class="
            mt-7
            h-auto
            w-full
            text-ellipsis
            grid grid-cols-3
            gap-5
            sm:grid-cols-1
            md:grid-cols-2
            lg:grid-cols-2
            xl:grid-cols-3
            indexContainer
          "
        >
          <!-- v-for="(item, index) in publication"
            :key="index" -->
          <div
            v-for="(item, index) in publication"
            :key="index"
            style="height: 70vh; width: 100%"
          >
            <CardItem @dataCard="cardDataReceived = $event" />
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
import { defineComponent, ref, watch } from "vue";
import Publication from "../../types/publication";
import { PlusIcon } from "@heroicons/vue/solid";
import CardItem from "../Card/CardItem.vue";

export default defineComponent({
  setup() {
    const publication = ref<Publication[]>([
      {
        uuid: "",
        idEnterprise: "",
        description: "",
        img: "",
        originalValue: null,
        promotionalValue: null,
        discountPercentage: "",
      },
    ]);
    const cardDataReceived: any = ref({});

    function addNewDiv() {
      publication.value.push({ ...cardDataReceived.value });
      console.log(publication.value);
    }

    function teste(index: number) {
      console.log(index);
    }

    watch(cardDataReceived, (newValue, oldValue) => {
      console.log(newValue);
      console.log(oldValue);
    });

    return {
      publication,
      addNewDiv,
      cardDataReceived,
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

@media screen and (max-width: 649px) and (min-width: 536px) {
  .indexContainer {
    display: flex;
    flex-direction: column;
  }
}
</style>
