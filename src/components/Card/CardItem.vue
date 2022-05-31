<template>
  <div class="cardPromotion">
    <div class="containerGeneralCard">
      <div class="w-full h-14 flex justify-end">
        <XIcon
          class="bg-red-600 text-white w-8 h-8 cursor-pointer"
          style="border-radius: 20%; position: relative; top: -10px; left: 10px"
        />
      </div>

      <div class="descriptionItem">
        <div class="dataCard">
          <p>jaqueta nike pica das galaxia</p>
          <p>Masculina</p>
          <p>Futebol</p>
          <p>R$ 579,99</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Publication from "../../types/publication";
import { XIcon } from "@heroicons/vue/solid";

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
  },
  components: {
    XIcon,
  },
});
</script>

<style scoped>
.cardPromotion {
  width: 100%;
  border-radius: 20px 20px 20px 20px;
  height: 100%;
  background-image: url("https://www.guller.com.br/3272-medium_default/camisa-masculina-casual-moda-ver%C3%A3o-confortav%C3%A9l-estampada-top-homens.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.containerGeneralCard:hover {
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border-radius: 20px 20px 20px 20px;
}

.descriptionItem {
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  font-family: sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
}

.dataCard {
  margin-left: 10px;
}

.containerGeneralCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
