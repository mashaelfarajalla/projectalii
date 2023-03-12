<template>
  <div class="homesection5">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Services</h2>
        </div>
      </div>
      <div
        class="row masonry"
        data-masonry='{"percentPosition":true}'
        style="position: relative; z-index: 1"
      >
        <div
          v-for="(item, index) in number"
          :key="index"
          class="col-auto my-4 mx-4 item"
        >
          <i class="fa-solid fa-gear" style="font-size: 60px"></i>
          <h5 class="mt-5">Easy Deployments</h5>
          <a href="#" class="mt-5">Learn More</a>
        </div>
      </div>
      <img
        src="../../../public/images/background-square-03-c58d9440.webp"
        style="position: absolute; top: 155px; left: -207px; z-index: 0"
      />
      <SeeAll />
    </div>
  </div>
</template>

<script>
import Masonry from "masonry-layout";
import SeeAll from "../SeeAll.vue";
export default {
  async mounted() {
    setTimeout(function () {
      new Masonry(".masonry");
    }, 1000);
  },
  components: { SeeAll },
  data() {
    return {
      number: 8,
    };
  },
};
</script>

<style></style>
