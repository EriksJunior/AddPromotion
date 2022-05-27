<template></template>

<script lang="ts">
import { defineComponent, ref, h } from "vue";
// import Publication from "../../types/publication";

export default defineComponent({
  setup() {
    // const publication = ref<Publication>({
    //   uuid: "",
    //   idEnterprise: "",
    //   description: "",
    //   img: "",
    //   originalValue: 0,
    //   promotionalValue: 0,
    //   discountPercentage: "",
    //   gain: 0,
    // });

    // function addNewDiv() {
    //   // let value: number = 1;
    //   // const divContainerGeneral = document.getElementById("containerGeneral");
    //   // const newDiv = document.createElement("div");
    //   // newDiv.className = "cardPromotion";
    //   // divContainerGeneral?.appendChild(newDiv);
    //   // const newDivImg = document.createElement("div");
    //   // newDiv.appendChild(newDivImg);
    //   // newDivImg.className = "imgItem";
    //   // const newDivDescription = document.createElement("div");
    //   // newDiv.appendChild(newDivDescription);
    //   // newDivDescription.className = "descriptionItem";
    //   // newDivDescription.textContent = "testeeeeee";
    // }
    return () =>
      h(
        "button",
        {
          style:
            "background-color: white; height: 80px; width: 200px; border-radius: 12px",
          onClick: () => {
            h("div", { class: "cardPromotion" }, [
              h("class", { class: "imgItem" }),
            ]);
          },
        },
        "ADD"
      );
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
</style>
