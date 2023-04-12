<template>
  <div id="progress">
    <span id="progress-value">&#x1F815;</span>
  </div>
  <HeaderVue />
  <router-view />
  <ABS />
  <FooterVue />
  <socialmedai />
  <iconmessage />
</template>

<script>
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";
import socialmedai from "./components/socialmedai.vue";
import iconmessage from "./views/iconmessage.vue";
import ABS from "./views/ABS.vue";

export default {
  components: { HeaderVue, FooterVue, socialmedai, iconmessage, ABS },
};
</script>
<style>
@media screen and (min-width: 992px) {
  #progress {
    bottom: 40px;
    right: 10px;
    width: 70px;
    height: 70px;
    font-size: 35px;
  }
}

@media screen and (max-width: 767px) {
  #progress {
    bottom: 15px;
    right: 10px;
    width: 55px;
    height: 55px;
    font-size: 27px;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  #progress {
    bottom: 40px;
    right: 10px;
    width: 70px;
    height: 70px;
    font-size: 35px;
  }
}

html {
  scroll-behavior: smooth;
}

#progress {
  position: fixed;
  border-radius: 50%;
  z-index: 2;
  color: #03114c;
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
i {
  font-size: 19px;
}
</style>
