<template>
  <label class="form-control__wrapper">
    {{ field.label }}
    <textarea
      class="form-control__text-area"
      :type="field.params.type || 'text'"
      :inputmode="field.params.inputmode || 'text'"
      @input="$emit('input', $event.target.value)"
    ></textarea>
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
