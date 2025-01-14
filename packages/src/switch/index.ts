import Switch from './switch.vue'
import { withInstall } from '../utils'

export const DSwitch = withInstall(Switch)

export { type SwitchProps } from './props'

export default DSwitch

declare module 'vue' {
  export interface GlobalComponents {
    DSwitch: typeof Switch
  }
}
