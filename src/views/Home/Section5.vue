<template>
  <div class="homesection5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-auto">
          <h2>مشاريع في كافة المجالات</h2>
          <p class="text-center">
            تصفح المشاريع وأنجز الأعمال المختصة بمهاراتك
          </p>
        </div>
      </div>
      <div class="row" style="position: relative; z-index: 1">
        <div
          v-for="(item, index) in number"
          :key="index"
          class="col-10 col-md-5 col-lg-auto my-4 mx-4 item"
        >
          <i class="fa-solid fa-gear" style="font-size: 60px"></i>
          <h5 class="mt-5">Easy Deployments</h5>
          <a href="#" class="mt-5">Learn More</a>
        </div>
      </div>
      <img
        class="imagebackground"
        src="../../../public/images/background-square-03-c58d9440.webp"
        style=""
      />
      <SeeAll />
    </div>
  </div>
</template>

<script>
import SeeAll from "../SeeAll.vue";
export default {
  components: { SeeAll },
  data() {
    return {
      number: 4,
    };
  },
};
</script>

<style></style>
