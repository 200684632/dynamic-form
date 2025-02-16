<template>
  <button :class="wrapperClassName" :disabled="disabled || readonly" @click="handleChange">
    <div :class="bem('handle', { active: innerValue })">
      <slot name="icon">
        <d-icon v-if="loading" name="loading" spin size="small" color="var(--d-primary)" />
      </slot>
      <slot v-if="innerValue" name="checked-icon"></slot>
      <slot v-if="!innerValue" name="unchecked-icon"></slot>
    </div>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, SetupContext } from 'vue'
import { isPromise } from '@vue/shared'
import { createNamespace } from '../utils'
import useModelValue from '../hooks/useModelValue'
import DIcon from '../icon'
import { isBoolean, throwError, debugWarn } from '@xuanmo/javascript-utils'
import { SWITCH_PROPS } from './props'

const [name, bem] = createNamespace('switch')
export default defineComponent({
  name,
  components: { DIcon },
  props: SWITCH_PROPS,
  emits: ['update:value', 'update:model-value'],
  setup(props, { emit }) {
    const [innerValue, setValue] = useModelValue<boolean | undefined, typeof props>(
      props,
      emit as SetupContext['emit']
    )

    const wrapperClassName = computed(() =>
      bem({
        [props.size]: props.size,
        active: innerValue.value,
        loading: props.loading,
        round: props.round,
        disabled: props.disabled || props.readonly
      })
    )

    const updateValue = () => setValue((innerValue.value = !innerValue.value))

    function handleChange() {
      if (props.loading) return

      const { beforeChange } = props
      if (!beforeChange) {
        updateValue()
        return
      }

      const interceptionResult = beforeChange()

      if (![isPromise(interceptionResult), isBoolean(interceptionResult)].some((i) => i)) {
        throwError(name, 'beforeChange 返回值必须为 `Promise<boolean>` 或者 `boolean`')
      }

      if (isPromise(interceptionResult)) {
        interceptionResult
          .then((result) => result && updateValue())
          .catch((e) => debugWarn(name, e))
      } else if (interceptionResult) {
        updateValue()
      }
    }

    return {
      bem,
      wrapperClassName,
      innerValue,
      handleChange
    }
  }
})
</script>
