<template>
  <button :class="classNames">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import { defineComponent, computed } from "vue";
import { buttonTypes } from "./const";
export default defineComponent({
  name: "IcButton",
  props: {
    type: {
      type: String,
      default: "primary",
      validator(type) {
        if (!buttonTypes.includes(type)) {
          throw new Error(
            `button的type只能是"primary", "danger", "warning", "success", "info"`
          );
        }
        return true;
      },
    },
  },
  setup(props) {
    const classNames = computed(() => ["ic-button", "ic-button-" + props.type]);
    return {
      classNames,
    };
  },
});
</script>
