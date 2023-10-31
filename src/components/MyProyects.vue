<template>
  <div class="container margin-bottom q-pt-lg" id="my-proyects">
   
      
        <div class="text-center padding-botton">
          <h1 class="text-weight-light q-my-none q-mb-md">Mis proyectos</h1>
          <p class="text-weight-light text-h6">Por el momento solo sitios de practica</p>
        </div>
        <div class="row justify-center q-gutter-md">
          <CardProyects class="col-lg-2 col-md-3 col-sm-8 col-xs-10"></CardProyects>
          <CardProyects class="col-lg-2 col-md-3 col-sm-8 col-xs-10"></CardProyects>
          <CardProyects class="col-lg-2 col-md-3 col-sm-8 col-xs-10"></CardProyects>
          <CardProyects class="col-lg-2 col-md-3 col-sm-8 col-xs-10"></CardProyects>
        </div>
    
  
  </div>
</template>

<script setup>
import CardProyects from "./CardProyects.vue";
</script>

<style scoped>

h1{
  font-size: 3em; 
  line-height: normal;
}

p{
  font-size: 1.3em;
}

.margin-bottom{
        margin-bottom: 90px;
    }
.padding-botton{
  padding-bottom: 50px;
}
</style>
