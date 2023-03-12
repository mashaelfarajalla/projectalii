<template>
  <div class="homesection5">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Services</h2>
        </div>
      </div>
      <div class="row masonry" data-masonry='{"percentPosition":true}'>
        <div
          v-for="(item, index) in number"
          :key="index"
          class="col-lg-3 my-4 item"
          style="padding: 40px"
        >
          <i class="fa-solid fa-gear" style="font-size: 60px"></i>
          <h5 class="mt-5">Easy Deployments</h5>
          <a class="mt-5">Learn More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(function () {
      new Masonry(".masonry");
    }, 1000);
  },
  data() {
    return {
      number: 8,
    };
  },
};
</script>

<style></style>
