<template>
  <div :class="classContainer">

     
      <languageSelector class="relative-position select q-mr-sm"></languageSelector>

    <ButtonTabs v-for="(item, index) in ObjectLabels" :label="item.label" :href="item.href" :key="index"  :class="divButtons"></ButtonTabs>
    
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { watchEffect, ref } from 'vue';

import languageSelector from './languageSelector.vue';
import ButtonTabs from './ButtonTabs.vue';


const props = defineProps({
  isVertical: {
    type: Boolean,
    default: false,
  },
});


const {t} = useI18n()


const ObjectLabels = ref({
  contact : {
    label: `${t("buttons.contactMe")}`,
    href: "#my-contact"
  },

  about:{
    label: `${t("buttons.aboutMe")}`,
    href: "#my-proyects"
  },

  proyects:{
    label: `${t("buttons.myProyects")}`,
    href: "#my-proyects"
  }
})

watchEffect(()=>{

  ObjectLabels.value.contact.label = t("buttons.contactMe")
  ObjectLabels.value.about.label = t("buttons.aboutMe")
  ObjectLabels.value.proyects.label = t("buttons.myProyects")

})



let divButtons = ""
let classContainer = "row justify-center items-end";

if (props.isVertical) {
 
  classContainer += " width";
  divButtons = " "
}



</script>

<style scoped>
.width{
    width: 30%;
    margin: auto;
}

.select{
 top: 20px;
}



@media(min-width: 456px){
  .width{
    width: 20%;
    
  }
}




</style>
