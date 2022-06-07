<template>
  <div class="cardPromotion">
    <div class="containerGeneralCard">
      <div class="w-full h-14 flex justify-between">
        <div>
          <CameraIcon
            class="bg-white text-black w-8 h-8 cursor-pointer"
            style="
              border-radius: 20%;
              position: relative;
              top: -10px;
              left: -10px;
            "
            @click="saveDataCard"
          />
        </div>

        <div class="w-6/12 flex justify-end">
          <div>
            <CheckIcon
              class="bg-green-600 text-white w-8 h-8 cursor-pointer"
              style="
                border-radius: 20%;
                position: relative;
                top: -10px;
                left: -10px;
              "
              @click="saveDataCard"
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
      </div>

      <div class="descriptionItem">
        <div class="w-full h-9 flex justify-center">
          <input
            type="text"
            class="w-11/12 h-9"
            v-model="publication.description"
            placeholder="Descrição"
          />
          <input v-model="publication.uuid" hidden />
          <input v-model="publication.idEnterprise" hidden />
        </div>
        <div class="w-full h-9 flex justify-evenly">
          <input
            type="text"
            class="w-4/12 h-9"
            v-model="publication.originalValue"
            placeholder="Vl. Original"
          />

          <input
            type="text"
            class="w-5/12 h-9"
            v-model="publication.promotionalValue"
            placeholder="Vl. Promocional"
          />
        </div>
        <div class="flex justify-evenly h-9 w-full">
          <input class="w-1/5" type="text" placeholder="Sexo" />
          <input class="w-2/5" type="text" placeholder="Tipo" />
          <input type="text" class="h-9 w-4/12" placeholder="% Desc" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Publication from "../../types/publication";
import { XIcon, CheckIcon, CameraIcon } from "@heroicons/vue/solid";

export default defineComponent({
  setup(props, { emit }) {
    const publication = ref<Publication>({
      uuid: "",
      idEnterprise: "",
      description: "",
      img: "",
      originalValue: null,
      promotionalValue: null,
      discountPercentage: "",
    });

    function removeCard() {}

    function saveDataCard() {
      emit("dadaCard", publication.value);
    }

    return {
      publication,
      saveDataCard,
    };
  },
  components: {
    XIcon,
    CheckIcon,
    CameraIcon,
  },
});
</script>

<style scoped>
.cardPromotion {
  width: 100%;
  border-radius: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
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
  font-size: 13px;
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
  width: 74%;
  border-radius: 20px;
  background-image: url("https://www.guller.com.br/3272-medium_default/camisa-masculina-casual-moda-ver%C3%A3o-confortav%C3%A9l-estampada-top-homens.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

input {
  border-radius: 5px 5px 5px 5px;
  border: none;
  text-align: center;
  font-weight: bold;
  background-color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  outline: none;
  color: white;
}

input:focus {
  background-color: rgb(21, 21, 21);
}

input::placeholder {
  color: rgba(255, 255, 255, 0.312);
}

@media screen and (max-width: 1236px) and (min-width: 994px) {
  .containerGeneralCard {
    width: 90%;
  }
}

@media screen and (max-width: 994px) and (min-width: 901px) {
  .containerGeneralCard {
    width: 75%;
  }
}

@media screen and (max-width: 805px) and (min-width: 650px) {
  .containerGeneralCard {
    width: 90%;
  }
}

@media screen and (max-width: 649px) and (min-width: 536px) {
  .containerGeneralCard {
    width: 55%;
  }
}

@media screen and (max-width: 536px) and (min-width: 390px) {
  .containerGeneralCard {
    width: 70%;
  }
}

@media screen and (max-width: 390px) and (min-width: 320px) {
  .containerGeneralCard {
    width: 90%;
  }
}
</style>
