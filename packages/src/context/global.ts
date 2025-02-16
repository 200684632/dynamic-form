import { InjectionKey } from 'vue'
import { DirectionType, HorizontalAlignType } from '../common'

export type FormGlobalConfigType = {
  /** 主题 */
  theme?: string

  /** 隐藏 label */
  hideLabel?: boolean

  /** label 宽度 */
  labelWidth?: string

  /** 单元格布局，默认：horizontal */
  cellLayout?: DirectionType

  /** 内容对齐方式 */
  contentAlign?: HorizontalAlignType

  /** 遮罩层 z-index */
  zIndex?: number
}

export const GLOBAL_CONFIG_CONTEXT_KEY = Symbol('DForm') as InjectionKey<FormGlobalConfigType>
