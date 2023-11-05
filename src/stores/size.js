import { defineStore } from "pinia";
import { ref } from "vue";


export const useSizeStore = defineStore("Size", () => {


    const report = ref({width : 601,
    height: 0})

    const onResize = size => {
        return report.value = size
    }

    return {
        report,
        onResize
    }
}) 