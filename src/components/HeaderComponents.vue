<template>
  <q-toolbar class="q-px-lg q-py-xs fixed-top toolbar">
    <q-toolbar-title>
      <q-icon name="code" />
    </q-toolbar-title>

    <InterestTabsVue v-if="!widthBelowNumber(600)"></InterestTabsVue>
    <q-btn
      flat
      round
      dense
      icon="menu"
      class="q-mr-sm"
      v-if="widthBelowNumber(600)"
      @click="showTabs = !showTabs"
    />
  </q-toolbar>

  <div
    class="fixed-center modal q-pb-sm"
    v-if="showTabs && widthBelowNumber(600)"
  >
    <InterestTabsVue class="" :isVertical="true"></InterestTabsVue>
  </div>
</template>

<script setup>
import { ref } from "vue";

import InterestTabsVue from "../components/InterestTabs.vue";
import { useResponsiveConfig } from "src/composables/responsive/responsive";

const responsiveConfig = useResponsiveConfig();

const { widthBelowNumber } = responsiveConfig;

const showTabs = ref(false);
</script>

<style scoped>
.toolbar {
  z-index: 100;
  background: white;
}

.modal {
  top: 130px;
  background: #fff;
  width: 100%;
}

.q-btn :deep(.q-icon) {
  font-size: 50px;
}

.q-icon {
  font-size: 50px;
}

@media (max-width: 300px) {
  .modal {
    top: 7em;
  }
}

@media (max-width: 300px) {
  .modal {
    top: 8em;
  }
}
</style>
