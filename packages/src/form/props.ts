import { ExtractPropTypes, PropType } from 'vue'
import { IFormModelItem } from './types'
import { pickProps } from '../utils'
import type { FormStore } from './store'
import { COMMON_PROPS, DirectionType, HorizontalAlignType } from '../common'

export type FormProps = ExtractPropTypes<typeof FORM_PROPS>

export const FORM_PROPS = {
  ...COMMON_PROPS,
  store: {
    type: Object as PropType<FormStore>,
    required: true
  },
  labelWidth: {
    type: [Number, String] as PropType<number | string>,
    default: 80
  },
  layout: String as PropType<DirectionType>,
  colon: Boolean,
  requiredMarkPosition: {
    type: String as PropType<Exclude<HorizontalAlignType, 'center'>>,
    default: 'right'
  },
  change: {
    type: Function as PropType<(value: Record<string, unknown>, model: IFormModelItem) => void>,
    default: undefined
  }
}

export const FORM_ITEM_PROPS = {
  ...pickProps(FORM_PROPS, [
    'disabled',
    'readonly',
    'store',
    'layout',
    'colon',
    'requiredMarkPosition'
  ]),
  labelWidth: {
    type: [Number, String] as PropType<number | string>,
    default: 80
  },
  modelItem: {
    type: Object as PropType<IFormModelItem>,
    default: () => ({})
  },
  errorMessage: String
}
