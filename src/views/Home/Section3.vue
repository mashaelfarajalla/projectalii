<template>
  <div class="container homesection3">
    <div class="row">
      <div class="col">
        <h2 class="mt-5">digital design</h2>
        <p class="mt-4">
          Digital design is any type of design that appears in a digital format
          on an application or website. It is a type of visual communication
          that presents information, a product or a service through a digital
          interface. In simpler terms, digital design is a graphic design
          designed specifically for use on computers.
        </p>
      </div>
    </div>
    <div class="row mt-5">
      <swiper
        :modules="modules"
        :slidesPerView="3"
        :spaceBetween="20"
        :loop="true"
        :cssMode="true"
        :navigation="true"
        :pagination="true"
        :mousewheel="true"
        :keyboard="true"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in number" :key="index"
          ><div class="card rounded-3">
            <img
              src="../../../public/images/img2.jpg"
              class="card-img-top rounded-3"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="hvr-icon-wobble-horizontal"
                >Read More <i class="fa-solid fa-arrow-right-long mx-2"></i
              ></a>
            </div></div
        ></swiper-slide>
      </swiper>
    </div>
    <SeeAll />
  </div>
</template>
<script>
import SeeAll from "../SeeAll.vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/pagination";

// import "./style.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    SeeAll,
  },
  data() {
    return {
      number: 7,
    };
  },
  setup() {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
    };
  },
};
</script>

<style></style>
