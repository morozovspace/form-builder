<template>
  <div>
    <div class="page__wrapper">
      <div :class="['header-and-page__wrapper']">
        <Header />
        <Nuxt />
      </div>
      <Footer />
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/styles/layouts/default.scss";
</style>
<script>
export default {
  data: () => ({}),
}
</script>
