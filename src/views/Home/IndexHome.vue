<template>
  <div
    class="h-screen flex justify-center"
    style="padding: 0; margin: 0; font-size: 50px; width: 100%"
  >
    <div class="w-10/12" style="border: solid 1px red">
      <div
        class="my-5 mt-5 text-ellipsis grid grid-cols-3 gap-3"
        style="height: 95%"
        ref="containerGeneral"
      >
        <!-- <div class="border-2 flex justify-center items-center w-9/12">
          <div>
            <PlusIcon class="border-2 cursor-pointer h-40 text-yellow-400" />
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, HtmlHTMLAttributes, ref, onMounted } from "vue";
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
    const containerGeneral = ref<HtmlHTMLAttributes>();

    function addNewDiv() {
      console.log(containerGeneral.value);
    }

    onMounted(() => {
      addNewDiv();
    });

    return {
      publication,
      containerGeneral,
    };
  },
  components: {
    PlusIcon,
  },
});
</script>

<style>
.cardPromotion{
  
}
</style>
