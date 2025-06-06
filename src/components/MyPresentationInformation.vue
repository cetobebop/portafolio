<template>
  <div class="first-container full-width flex justify-center">
    <div id="second-container" class="column">
      <div id="cv">
        <q-btn
          color="dark"
          href="/public/documents/Carlos_Torrens_cv.docx"
          icon="fa-solid fa-download"
          label="CV"
          download
        />
      </div>
      <div id="personal-links" class="row justify-center q-gutter-sm q-mt-xs">
        <icon-link
          href="https://github.com/cetobebop"
          icon_name="fa-brands fa-github"
          size="md"
        ></icon-link>
        <icon-link
          href="https://linkedin.com/in/carlos-torrens-orta-212a13287"
          icon_name="fa-brands fa-linkedin-in"
          size="sm"
        ></icon-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import iconLink from "./iconsLink.vue";
</script>

<style scoped>
#second-container {
  width: 30%;
  /* border: 1px solid black; */
}
</style>
