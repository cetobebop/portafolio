import {useSizeStore} from "src/stores/size"
import { storeToRefs } from "pinia"


export const useResponsiveConfig = () => {

    const sizeStore = useSizeStore()
    const {report} = storeToRefs(sizeStore)

    const widthBelowNumber = number => (report.value.width <= number) ? true : false

    return {
        widthBelowNumber
    }
}