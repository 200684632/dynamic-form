import Picker from './picker.vue'
import { withInstall } from '../utils'

export const DPicker = withInstall(Picker)

export { type PickerColumnsType, type PickerColumnType, type PickerProps } from './props'

export default DPicker

declare module 'vue' {
  export interface GlobalComponents {
    DPicker: typeof Picker
  }
}
