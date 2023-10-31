<template>
 
    <q-form @submit.prevent="HandleEvent" class="col-md-8 col-sm-8">
      
     
      <FormField label="Tu correo (opcional)" type="email" class="q-mb-md" icon="email"></FormField>
      <FormField label="Mensaje" type="textarea" class="q-mb-md" icon="volunteer_activism"></FormField>
    

    </q-form>

</template>

<script setup>
import FormField from "./FormField.vue";




const HandleEvent = () => {

}


</script>
