<template>

<q-toolbar class="q-px-lg">
        <q-toolbar-title>
          <q-icon name="code" />
        </q-toolbar-title>
      
        <InterestTabsVue v-if="!widthBelowNumber(600)"></InterestTabsVue>
        <q-btn flat round dense icon="menu" class="q-mr-sm" v-if="widthBelowNumber(600)" @click="showTabs = !showTabs" />
      
</q-toolbar>
       
     <div class="relative-position">
      
        <div class="absolute-center modal">
          <InterestTabsVue class="" v-if="showTabs && widthBelowNumber(600)" :isVertical="true"></InterestTabsVue>
        </div>
     
     </div>


</template>

<script setup> 
    import InterestTabsVue from '../components/InterestTabs.vue';
    import { ref } from 'vue';
    
    import {useResponsiveConfig} from "src/composables/responsive/responsive"

    const responsiveConfig = useResponsiveConfig()
    
    
    const { widthBelowNumber} = responsiveConfig;

    const showTabs = ref(false)
</script>

<style scoped>
.modal{
  top: 60px;
  background: #fff;
  width: 100%;
}



.q-btn :deep(.q-icon) {
    font-size: 50px;
  }

.q-icon{
  font-size: 50px;
}  
</style>