import { ExtractPropTypes, PropType } from 'vue'
import { IFormModelItem } from './types'
import { pickProps } from '../utils'
import type { FormStore } from './store'
import { COMMON_PROPS, DirectionType } from '../common'

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
  layout: String as PropType<DirectionType>
}

export const FORM_ITEM_PROPS = {
  ...pickProps(FORM_PROPS, ['disabled', 'readonly', 'store', 'layout']),
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
