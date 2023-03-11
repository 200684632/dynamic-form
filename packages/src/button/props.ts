import { PropType } from 'vue'
import { SizeType, ThemeType } from '../common'

export const buttonProps = {
  /**
   * 主题分类
   */
  theme: {
    type: String as PropType<ThemeType>,
    default: 'default'
  },

  /**
   * 按钮大小
   */
  size: {
    type: String as PropType<SizeType>,
    default: 'medium'
  },

  /**
   * 是否禁用
   */
  disabled: {
    type: Boolean,
    default: false
  },

  /**
   * 图标
   */
  icon: {
    type: String,
    default: undefined
  },

  /**
   * 是否为块级元素
   */
  block: Boolean,

  /**
   * 填充模式
   */
  fill: {
    type: String as PropType<'solid' | 'outline' | 'none'>,
    default: 'solid'
  },

  /**
   * 按钮形状
   */
  shape: {
    type: String as PropType<'default' | 'rounded' | 'rectangular'>,
    default: 'default'
  },

  /**
   * 是否显示 loading 效果
   */
  loading: Boolean
}
