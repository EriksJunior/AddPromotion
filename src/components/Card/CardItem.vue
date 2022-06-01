<template>
  <div class="cardPromotion">
    <div class="containerGeneralCard">
      <div class="w-full h-14 flex justify-between">
        <div>
          <CheckIcon
            class="bg-green-600 text-white w-8 h-8 cursor-pointer"
            style="
              border-radius: 20%;
              position: relative;
              top: -10px;
              left: -10px;
            "
          />
        </div>

        <div>
          <XIcon
            class="bg-red-600 text-white w-8 h-8 cursor-pointer"
            style="
              border-radius: 20%;
              position: relative;
              top: -10px;
              left: 10px;
            "
          />
        </div>
      </div>

      <div class="descriptionItem">
        <div class="w-full h-9 flex justify-center">
          <input type="text" class="w-11/12 h-9" placeholder="Descrição" />
        </div>
        <div class="flex justify-evenly h-9 w-full">
          <input class="w-1/5" type="text" placeholder="Sexo" />
          <input class="w-2/5" type="text" placeholder="Tipo" />
          <input type="text" class="h-9 w-4/12" placeholder="Valor" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Publication from "../../types/publication";
import { XIcon, CheckIcon } from "@heroicons/vue/solid";

export default defineComponent({
  setup(props, { emit }) {
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

    function removeCard() {
      emit("removeCard");
    }
  },
  components: {
    XIcon,
    CheckIcon,
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
  /* -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px); */
  border-radius: 20px 20px 20px 20px;
}

.descriptionItem {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: 30%;
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

input {
  border-radius: 5px 5px 5px 5px;
  border: none;
  text-align: center;
  font-weight: bold;
  background-color: #060b11c6;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  outline: none;
}

input:focus {
  background-color: #060b11;
}
</style>
