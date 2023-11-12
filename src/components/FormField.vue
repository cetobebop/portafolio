<template>
  <q-input
    standout=" text-white"
    :rules="[rules]"
    :label="label"
    :type="type"
    :dense="dense"
    lazy-rules
  >
    <template v-slot:prepend>
      <q-icon :name="icon" />
    </template>
  </q-input>
</template>

<script setup>
import { ref } from "vue";

defineProps(["label", "type", "icon", "rules"]);

const dense = ref(false);
</script>

<style scoped>
.q-input::deep(.q-field__label) {
  font-weight: 700;
}
</style>
