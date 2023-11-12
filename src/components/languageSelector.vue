<template>

    <q-select color="dark" class="text-weight-bold" emit-value hide-dropdown-icon borderless dense bottom-slots v-model="locale" transition-hide  :options="options" >
        <template v-slot:prepend>
          <q-icon name="fa-solid fa-language" />
        </template>
    </q-select>

</template>


<script setup>


import { useI18n } from 'vue-i18n'

let {locale} = useI18n()

const options = [{
  label: "Español",
  value: "es"
},
{
  label: "English",
  value: "en"
}]





</script>


<style scoped>
 
.q-icon{
  margin-right: 3px;
  font-size: 1em !important;
}

.q-select{
  font-size: 1em;
}


</style>