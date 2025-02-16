<template>
  <div :class="classes">
    <span v-if="readonly">{{ innerValue }}</span>
    <template v-else>
      <span
        v-for="i in count"
        :key="i"
        :class="bem('item', { active: i <= innerValue })"
        :style="rateItemStyle"
        @click="handleChange(i)"
      >
        <d-icon
          v-if="i > innerValue"
          :name="uncheckedIcon"
          :size="size!"
          :color="disabled ? 'var(--d-disable-color)' : 'var(--d-secondary-text-color)'"
        />
        <d-icon
          v-if="i <= innerValue"
          :name="checkedIcon"
          :size="size!"
          :class="bem('item', 'active', true)"
          :color="disabled ? 'var(--d-disable-color)' : activeColor"
        />
      </span>
    </template>
  </div>
</template>

<script lang="ts">
import { computed, CSSProperties, defineComponent, SetupContext } from 'vue'
import { createNamespace } from '../utils'
import { isNumber } from '@xuanmo/javascript-utils'
import useModelValue from '../hooks/useModelValue'
import { RATE_PROPS } from './props'

const [name, bem] = createNamespace('rate')

export default defineComponent({
  name,
  props: RATE_PROPS,
  setup(props, context: SetupContext) {
    const [innerValue, updateValue] = useModelValue<number, typeof props>(
      props as never,
      context.emit
    )

    const classes = bem({
      disabled: props.disabled
    })

    const rateItemStyle = computed<CSSProperties>(() => ({
      marginRight: isNumber(props.gap) ? `${props.gap}px` : props.gap
    }))

    function handleChange(index: number) {
      if (props.disabled) return
      if (props.allowClear) {
        return updateValue(innerValue.value === index ? 0 : index)
      }
      updateValue(index)
    }

    return {
      innerValue,
      classes,
      rateItemStyle,
      bem,
      handleChange
    }
  }
})
</script>
