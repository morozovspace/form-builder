<template>
  <label>
    {{ field.label }}
    <input
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
          name: "defaultName",
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
