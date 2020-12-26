<script>
export default {
  data: () => ({
    formConfig: [],
    ready: false,
  }),
  async created() {
    try {
      const res = await this.$axios.get("./form-example-config.json")
      this.formConfig = res.data
      this.ready = true
    } catch (e) {
      // handle error
    }
  },
  methods: {
    async submit(data) {
      try {
        // do your submit logic here
        await this.$axios.post("/", data)
      } catch (e) {
        // handle error
      }
    },
  },
}
</script>
<template>
  <main class="index-page__wrapper">
    <form-builder v-if="ready" :config="formConfig" @submit="submit" />
  </main>
</template>
<style lang="scss">
@import "@/assets/styles/pages/index.scss";
</style>
