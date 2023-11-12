<template>
  <div class="card">
    <q-card class="my-card no-shadow border no-padding">
      <q-img :src="srcImagen"> </q-img>

      <q-card-section>
        <h6 class="q-mt-none q-mb-sm text-weight-regular">{{ titulo }}</h6>
        <p class="text-subtitle2">{{ descripcion }}</p>

        <div class="q-mb-sm">
          <q-badge
            v-for="(tecnologia, index) in tecnologias"
            :key="index"
            class="q-mr-sm"
            color="pink-11"
            >{{ tecnologia }}</q-badge
          >
        </div>

        <q-separator></q-separator>

        <div class="q-mt-sm">
          <q-btn
            :href="linkCodigo"
            target="_blank"
            outline
            style="color: #000"
            class="q-mr-sm"
            :label="$t(`myProyects.cardProyect.buttonCode`)"
          />
          <q-btn
            :href="linkSitio"
            target="_blank"
            unelevated
            :label="$t(`myProyects.cardProyect.buttonSite`)"
            style="background: #000"
            class="text-white"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
defineProps([
  "srcImagen",
  "titulo",
  "descripcion",
  "tecnologias",
  "linkSitio",
  "linkCodigo",
]);
</script>

<style scoped>
h6 {
  font-size: 1.5em;
}

p {
  font-size: 0.9em;
}
.border {
  border: thin solid #000;
}

.no-padding {
  padding: 0;
}

@media (max-width: 255px) {
  .q-btn:nth-child(2) {
    margin-top: 5px;
  }
}
</style>
