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
            <CardItem @dadaCard="teste = $event" />
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
    const teste: any = ref({});

    function addNewDiv() {
      publication.value.push({ ...teste.value });
      console.log(teste.value, "log1", publication.value);
    }

    return {
      publication,
      addNewDiv,
      teste,
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
