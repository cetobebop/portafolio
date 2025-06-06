<template>
  <div class="img-container">
    <q-avatar size="200px">
      <q-img
        :src="imgAvatar"
        style="max-width: 100%; height: 100%"
        fit="contain"
        id="p"
      >
      </q-img>
    </q-avatar>
  </div>
</template>

<script setup>
import imgAvatar from "../../public/img/yo.jpg";
</script>

<style scoped>
.img-container {
  margin: 30px 0 30px 0;
}
</style>
