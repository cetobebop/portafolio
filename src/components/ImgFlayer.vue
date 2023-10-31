<template>

    <div class="img-container row q-px-lg justify-center">

        <q-img style="width: 70%; max-width: 800px; max-height: ; height: 100%" fit="contain" :src="sizeStore.report.width > 500 ? imgFlayerBig : imgFlayerResponsive" />

    </div>

</template>

<script setup>
import { useSizeStore } from 'src/stores/size';

import imgFlayerBig from "../../public/img/imagen.png"
import imgFlayerResponsive from "../../public/img/imagen2.png"

const sizeStore = useSizeStore()




</script>

