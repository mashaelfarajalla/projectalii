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
nav button.btn-outline-success,
.homesection1 button.btn-outline-success {
  background-color: #03114c;
  border: 2px solid white;
  font-weight: bold;
  color: white;
  border-radius: 15px;
  width: 160px;
  margin: 0 15px;
}
h2 {
  font-weight: 500;
  /* font-size: 3vw; */
  font-size: 57.6px;
  line-height: 84px;
  position: relative;
}

p {
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  opacity: 0.9;
}
</style>
