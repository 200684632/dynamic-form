import { PropType } from 'vue'
import { DataType } from '../common'

export type PickerValueType = string[] | number[] | DataType[]

/** 级联选择数据类型 */
export type CascadeDataType = DataType & { children?: DataType[] }

/** 选择器每列数据类型 */
export type PickerColumnType = DataType | CascadeDataType

/** 选择器数据类型 */
export type PickerColumnsType = PickerColumnType[] | PickerColumnType[][]

export const pickerProps = {
  value: {
    type: Array as PropType<PickerValueType>,
    default: undefined
  },
  modelValue: {
    type: Array as PropType<PickerValueType>,
    default: undefined
  },
  /**
   * 显示隐藏
   */
  visible: Boolean,

  /**
   * 选择器列
   */
  columns: {
    type: Array as PropType<PickerColumnsType>,
    default: () => []
  },

  /**
   * 支持设置一个顶部标题
   */
  title: String,

  /**
   * 关闭按钮文字
   */
  cancelButtonText: {
    type: String,
    default: '取消'
  },

  /**
   * 确认按钮文字
   */
  confirmButtonText: {
    type: String,
    default: '确认'
  },

  /**
   * 选项单个高度
   */
  optionHeight: {
    type: Number,
    default: 42
  }
}
