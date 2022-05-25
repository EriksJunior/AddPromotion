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
      >
        <!-- <div class="cardPromotion">
          <div class="imgItem">
            <img
              src="data:image/jpeg;base64,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"
            />
          </div>
          <div class="descriptionItem">
            <p>jaqueta nike pica das galaxia</p>
            <p>Masculina</p>
            <p>Futebol</p>
            <p>R$ 579,99</p>
          </div>
        </div> -->
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

    function addNewDiv() {
      const divContainerGeneral = document.getElementById("containerGeneral");
      const newDiv = document.createElement("div");

      newDiv.className = "cardPromotion";
      divContainerGeneral?.appendChild(newDiv);
    }

    return {
      publication,
      addNewDiv,
    };
  },
  components: {
    PlusIcon,
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
  border: solid 1px red;
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
</style>
