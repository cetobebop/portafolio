<template>
  <q-input standout="text-white" class="resize-none " :label="label" :type="type" :dense="dense" >
    <template v-slot:prepend>
      <q-icon :name="icon" />
    </template>
  </q-input>

</template>

<script setup>
import { ref } from "vue";

defineProps(["label", "type", "icon"])

const dense = ref(false);
</script>

<style scoped>

.resize-none {
        resize: none !important;
}

</style>