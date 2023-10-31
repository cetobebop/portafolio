<template>

    <div >
      <q-btn
        :href="href"  
        color="white"
        :label="label"
        unelevated
        :class="`${classButtons}`"
      />
    </div>



  
</template>

<script setup>
    defineProps(["label", "href"])
    const classButtons = "text-black q-pa-sm text-center";
</script>