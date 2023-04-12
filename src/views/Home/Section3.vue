<template>
  <div class="container homesection3">
    <div class="row justify-content-center text-center">
      <div class="col-10">
        <h2 class="mt-5">التصميم الرقمي</h2>
        <p class="mt-4 text-center">
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
                {{ item.details.substring(0, 75) + "..." }}
              </p>
              <router-link
                :to="'/digitaldesign/' + item.id"
                class="hvr-icon-wobble-horizontal d-flex align-items-center justify-content-start"
                >قراءة المزيد <i class="fa-solid fa-arrow-left-long mx-2"></i>
              </router-link>
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

<style>
.homesection3 {
  padding: 30px 22px;
}

.homesection3 h2,
.homesection4 h2,
.homesection5 h2 {
  color: #001527cf;
}

.homesection3 p {
  color: #001527a6;
}

.homesection3 .swiper-button-prev {
  right: 0px !important;
}

.homesection3 .swiper-button-next {
  left: 0px !important;
}

.homesection3 .swiper-button-prev,
.homesection3 .swiper-button-next {
  padding: 45px 20px;
  /* background-color: #0000ff1f; */
  background-color: #dfdfffbd;
  color: #02023e;
}
.homesection3 .swiper-button-prev:hover,
.homesection3 .swiper-button-next:hover {
  color: white;
  background-color: #000000;
}

.homesection3 .swiper-button-next:after,
.homesection3 .swiper-button-prev:after {
  font-size: 20px !important;
}
.homesection3
  .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal {
  display: none;
}

.homesection3 .card {
  padding: 15px;
}
.homesection3 .card p {
  font-size: 17px;
}
</style>
