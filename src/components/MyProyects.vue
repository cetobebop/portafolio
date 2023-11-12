<template>
  <div class="container margin-bottom q-pt-lg" id="my-proyects">
    <div class="text-center padding-botton">
      <h1 class="text-weight-light q-my-none q-mb-md">
        {{ $t("myProyects.title") }}
      </h1>
      <p class="text-weight-light text-h6">{{ $t("myProyects.subtitle") }}</p>
    </div>
    <div class="row justify-center q-gutter-md">
      <CardProyects
        v-for="(proyect, index) in proyects"
        :key="index"
        :srcImagen="proyect.srcImage"
        :titulo="proyect.title"
        :descripcion="proyect.description"
        :link-codigo="proyect.linkGitHub"
        :link-sitio="proyect.linkSite"
        :tecnologias="proyect.technologies"
        class="col-lg-2 col-md-3 col-sm-8 col-xs-10"
      ></CardProyects>
    </div>
  </div>
</template>

<script setup>
import CardProyects from "./CardProyects.vue";

import { proyects } from "src/composables/proyects";

console.log(proyects);
</script>

<style scoped>
h1 {
  font-size: 3em;
  line-height: normal;
}

p {
  font-size: 1.3em;
}

.margin-bottom {
  margin-bottom: 90px;
}
.padding-botton {
  padding-bottom: 50px;
}
</style>
