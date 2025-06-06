<template>
  <div class="container relative-position">
    <div id="my-contact"></div>
    <div class="row justify-center q-pt-lg q-pb-md">
      <h1
        class="text-center col-md-12 col-xs-12 text-h3 text-weight-light q-my-none q-mb-md"
      >
        {{ $t("myContact.title") }}
      </h1>
      <p
        class="text-center col-md-12 col-xs-12 text-h6 text-weight-light q-my-none q-mb-md"
      >
        {{ $t("myContact.subtitle") }}
      </p>
      <ContactForm></ContactForm>
    </div>
    <ACat></ACat>
  </div>
</template>

<script setup>
import ContactForm from "./ContactForm.vue";
import ACat from "./ACat.vue";
</script>

<style scoped>
#my-contact {
  position: absolute;
  top: -60px;
}
h1 {
  font-size: 3em;
  line-height: normal;
}
</style>
