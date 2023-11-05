<template>
  <q-card class="my-card border q-pt-lg no-shadow border">
    <div class="row justify-center q-mb-md">
      <div class="circle overflow-hidden row justify-center">
        <img :src="srcImage" class="image-size" />
      </div>

  
    </div>

    <q-card-section class="text-center">
      <div class="titulo text-weight-medium q-pb-sm">{{ titulo }}</div>
      <p class="  width-70 q-mx-auto q-px-sm">{{ descripcion }}</p>

    </q-card-section>

    <q-card-section class="text-center q-pt-none">
      <div class=" text-weight-bold color-FACBEA">Tecnologías:</div>
      <div class="  q-pb-md">
        <li v-for="(item, index) in tecnologias" :key="index">{{ item }}</li>
      </div>
    </q-card-section>

    
    
  </q-card>
</template>

<script setup>
defineProps(["srcImage","titulo","descripcion","tecnologias"])

</script>


<style scoped>


    div,li,p{
      font-size: 1em;
    }

    .titulo{
      font-size: 1.5em;
    }

    li{
      list-style: none;
    }

    .width-70{
      width: 70%;
    }
    
    .color-FACBEA{
      color: #FBA1B7;
    }

    .border{
      border: thin solid #E6ECF8;
    }
    .image-size{
      width: 70%;
      margin: auto;
      object-fit: contain;
      max-width: 150px;
      min-width: 50px;
      border-radius: 0% !important; 
      
    }

    .circle{
      padding: 6px;
      background: #FBA1B7;
      border-radius: 50%;
      width: 100px;
      height: 100px;
    }

</style>