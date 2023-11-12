<template>
  <div class="container">
    <div class="row text-center">
      <h3 class="col-xs-12 q-px-sm text-weight-light q-mt-none q-mb-lg">
        {{ $t("myPresentation.title") }}
      </h3>

      <p class="col-xs-12 text-h6 text-weight-regular q-px-sm">
        {{ $t("myPresentation.subtitle") }}
      </p>

      <ImgAvatar class="col-xs-12"></ImgAvatar>
    </div>

    <ImgFlayer class="q-mx-auto q-mt-md"></ImgFlayer>
  </div>
</template>

<script setup>
import ImgAvatar from "./ImgAvatar.vue";
import ImgFlayer from "./ImgFlayer.vue";
</script>
