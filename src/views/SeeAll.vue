<template>
  <div class="row mt-5 seeall">
    <div class="col-auto">
      <router-link
        :to="(name = 'About')"
        class="d-flex align-items-center justify-content-end"
      >
        رؤية المزيد
        <div class="lineseeall mx-3"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.seeall a {
  color: rgb(2, 2, 72);
}
.lineseeall {
  width: 30px;
  height: 2px;
  background-color: rgb(2, 2, 72);
}
</style>
