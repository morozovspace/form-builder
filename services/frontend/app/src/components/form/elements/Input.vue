<template>
  <label class="form-control__wrapper">
    {{ field.label }}
    <input
      class="form-control__input"
      :type="field.params.type || 'text'"
      :inputmode="field.params.inputmode || 'text'"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>
<script>
export default {
  props: {
    field: {
      type: Object,
      default: () => {
        return {
          id: "defaultInput",
          type: "Input",
          label: "defaultLabel",
          validation: "",
          params: {
            type: "text",
            inputmode: "text",
          },
        }
      },
    },
  },
}
</script>
