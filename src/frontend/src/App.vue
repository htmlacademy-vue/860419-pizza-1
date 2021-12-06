<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    layout() {
      const layoutName = this.$route.meta.layout || "DefaultLayout";
      return () => import(`@/layouts/${layoutName}.vue`);
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/app";
</style>
