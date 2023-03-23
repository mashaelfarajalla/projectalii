<template>
  <div id="progress">
    <span id="progress-value">&#x1F815;</span>
  </div>
  <HeaderVue />
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
html {
  scroll-behavior: smooth;
}

#progress {
  position: fixed;
  /* background: #03114c; */
  bottom: 40px;
  right: 10px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  z-index: 1;
  color: #03114c;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
#progress-value {
  width: calc(100% - 15px);
  height: calc(100% - 15px);
  background-color: white;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

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
