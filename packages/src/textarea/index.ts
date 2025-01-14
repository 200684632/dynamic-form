import Textarea from './textarea.vue'
import { withInstall } from '../utils'

export const DTextarea = withInstall(Textarea)

export { type TextareaProps } from './props'

export default DTextarea

declare module 'vue' {
  export interface GlobalComponents {
    DTextarea: typeof Textarea
  }
}
