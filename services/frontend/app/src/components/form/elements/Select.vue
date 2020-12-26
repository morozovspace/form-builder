<template>
  <label class="form-control__wrapper">
    {{ field.label }}
    <select
      :id="`${field.id}_${field.label}`"
      v-model="selected"
      :name="field.label"
      class="form-control__select"
      @change="$emit('input', selected)"
    >
      <option
        v-for="option of field.params.options"
        :key="option.id"
        :value="option.id"
      >
        {{ option.title }}
      </option>
    </select>
  </label>
</template>
<script>
export default {
  props: {
    field: {
      type: Object,
      default: () => {
        return {
          id: "defaultSelect",
          type: "Select",
          label: "Default label",
          params: {
            options: [],
          },
        }
      },
    },
  },
  data: () => ({ selected: null }),
}
</script>
