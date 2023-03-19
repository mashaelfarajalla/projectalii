<template>
  <HeaderVue />
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
  <FooterVue />
  <socialmedai />
</template>

<script>
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";
import socialmedai from "./components/socialmedai.vue";
export default {
  components: { HeaderVue, FooterVue, socialmedai },
};
</script>
<style>

</style>
