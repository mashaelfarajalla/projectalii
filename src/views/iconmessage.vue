<template>
  <div
    class="iconmessage d-flex align-items-center justify-content-center"
    style=""
  >
    <router-link to="/countactus" target="_blank">
      <i
        class="fa-regular fa-message"
        style="font-size: 29px; color: white"
      ></i>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
@media screen and (min-width: 992px) {
  .iconmessage {
    width: 72px;
    height: 72px;
    bottom: 35px;
    left: 55px;
  }
}

@media screen and (max-width: 767px) {
  .iconmessage {
    width: 60px;
    height: 60px;
    bottom: 25px;
    left: 18px;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .iconmessage {
    width: 72px;
    height: 72px;
    bottom: 35px;
    left: 55px;
  }
}

.iconmessage {
  position: fixed;

  background: #03114c;
  border-radius: 50%;

  z-index: 2;
}
</style>
