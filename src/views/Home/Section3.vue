<template>
  <div class="container homesection3">
    <div class="row justify-content-center text-center">
      <div class="col-10">
        <h2 class="mt-5">التصميم الرقمي</h2>
        <p class="mt-4">
          التصميم الرقمي هو أي نوع من التصميم يظهر في تنسيق رقمي على تطبيق أو
          موقع ويب. إنه نوع من الاتصال المرئي يقدم معلومات أو منتجًا أو خدمة من
          خلال رقمي واجهه المستخدم. بعبارات أبسط ، التصميم الرقمي هو تصميم رسومي
          مصمم خصيصًا للاستخدام على أجهزة الكمبيوتر.
        </p>
      </div>
    </div>
    <div class="row mt-5">
      <swiper
        :modules="modules"
        :slidesPerView="1"
        :spaceBetween="20"
        :breakpoints="{
          '480': {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          '640': {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          '992': {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }"
        :loop="true"
        :cssMode="true"
        :navigation="true"
        :pagination="true"
        :mousewheel="true"
        :keyboard="true"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in degitaldesgin" :key="index"
          ><div class="card rounded-3">
            <img :src="item.image" class="card-img-top rounded-3" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center">{{ item.title }}</h5>
              <p class="card-text">
                {{ item.details }}
              </p>
              <a href="#" class="hvr-icon-wobble-horizontal"
                >قراءة المزيد <i class="fa-solid fa-arrow-left-long mx-2"></i>
              </a>
            </div></div
        ></swiper-slide>
      </swiper>
    </div>
    <SeeAll />
  </div>
</template>
<script>
import SeeAll from "../SeeAll.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import axios from "axios";

export default {
  components: {
    Swiper,
    SwiperSlide,
    SeeAll,
  },
  data() {
    return {
      degitaldesgin: [],
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
  async mounted() {
    let result = await axios.get("http://localhost:3000/degitaldesgin");
    this.degitaldesgin = result.data;
  },
};
</script>

<style></style>
