<template>
  <div :class="classContainer">
    
    <ButtonTabs v-for="(item, index) in ObjectLabels" :label="item.label" :href="item.href" :key="index"  :class="divButtons"></ButtonTabs>
    
  </div>
</template>

<script setup>
import ButtonTabs from './ButtonTabs.vue';

const props = defineProps({
  isVertical: {
    type: Boolean,
    default: false,
  },
});


const ObjectLabels = [{
  label: "Contáctame",
  href: "#my-contact"
},
{
  label: "Proyectos",
  href: "#my-proyects"
},
{
  label: "Sobre mi",
  href: "#my-greeting"
},
]

let divButtons = ""
let classContainer = "row justify-center";

if (props.isVertical) {
 
  classContainer += " width";
  divButtons = "col-sm-12 col-md-12 "
}


</script>

<style scoped>
.width{
    width: 30%;
    margin: auto;
}

/* .e:first-child{
    padding-right: 40px;
} */
</style>
