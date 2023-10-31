<template>
  <q-layout view="hHh lpR fFf" @resize="sizeStore.onResize"  >

    <q-header bordered class="white absolute text-black no-border q-pt-md" height-hint="98" >
      <headerComponents></headerComponents>
    </q-header>
 
    <q-page-container class="padding-pagecontainer ">
      <router-view />
      
    </q-page-container>


    <q-footer class="static">
      <FooterComponet></FooterComponet>
    </q-footer>

  </q-layout>
</template>

<script setup>

  import headerComponents from 'src/components/HeaderComponents.vue';
  import FooterComponet from 'src/components/FooterComponet.vue';
  import {useSizeStore} from "src/stores/size";
  const sizeStore = useSizeStore()
 

</script>


<style scoped>

.padding-pagecontainer{
  padding-bottom: 0 !important;
  padding-top: 130px !important;
}



.white{
  background: #fff;
}

.static{
  position: static;
}
  
</style>
