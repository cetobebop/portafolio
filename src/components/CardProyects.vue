<template>
  <div class="card" >
    <q-card class="my-card no-shadow border no-padding">
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg">
        <div class="text-subtitle2 text-center background-hover no-padding">
          <div class="text text-subtitle1 row justify-center">
            <q-icon name="code"></q-icon>
            <div class="row justify-center" style="width: 100%;">
              <BtnCards></BtnCards>
              <BtnCards class="q-ml-sm back-pink"></BtnCards>
            </div>
          </div>
        </div>
      </q-img>

      <q-card-section class="q-pt-none">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>


<script setup>

import BtnCards from './BtnCards.vue';

</script>

<style scoped>
.border {
  border: thin solid #eef1f5;
}



.card:hover:deep(a) {
  color: #e6ecf8;
  transition: 0.5s;
  background: transparent;
  border-color: #fba1b7;
}

.card:hover:deep(.back-pink){
  background: #fba1b7;
  color: black;
}

.q-icon {
  padding-top: 10px;
  margin-bottom: 20px;
  font-size: 100px;
  color: transparent;
}


.card:hover:deep(.q-icon) {
  transition: 0.5s;
  color: #fff;
}

div .btn:hover {
  transition: 0.5s;
  background: #fba1b7;
}

.background-hover {
  width: 100%;
  height: 100%;
  background: transparent;
  transition: all 0.5s;
}
.card:hover:deep(.background-hover) {
  transition: all 0.5s;
  background: rgba(0, 0, 0, 0.5);
}
.no-padding {
  padding: 0;
}
</style>
