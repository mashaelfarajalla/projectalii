<template>
  <div class="digitaldesign">
    <diV class="container" style="padding: 175px 0">
      <div class="row">
        <div class="col">
          <h2>{{ degitaldesgin.title }}</h2>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-8">
          <swiper
            :pagination="{
              type: 'progressbar',
            }"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide
              class="d-flex align-items-center justify-content-center"
              v-for="(item, index) in degitaldesgin.childimage"
              :key="index"
            >
              <img :src="item.image" />
            </swiper-slide>
          </swiper>

          <div class="mt-5" style="padding: 0 33px">
            <!-- <h3>{{ project.title }}</h3> -->
            <p class="mt-3">{{ degitaldesgin.details }}</p>
          </div>
        </div>
        <div class="col-4 mt-5">
          <h3 class="mt-4">المهارات المستخدمة</h3>
          <div class="row mt-4">
            <div
              class="col-auto mx-2 my-2"
              style="
                background: white;
                padding: 18px;
                border-radius: 45px;
                box-shadow: rgb(191 191 191) 4px 4px 8px;
              "
            >
              HTML
            </div>
            <div
              class="col-auto mx-2 my-2"
              style="
                background: white;
                padding: 18px;
                border-radius: 45px;
                box-shadow: rgb(191 191 191) 4px 4px 8px;
              "
            >
              JavaScript
            </div>
            <div
              class="col-auto mx-2 my-2"
              style="
                background: white;
                padding: 18px;
                border-radius: 45px;
                box-shadow: rgb(191 191 191) 4px 4px 8px;
              "
            >
              Css
            </div>
          </div>

          <h3 class="mt-5">المستقلين</h3>
          <div class="card my-4">
            <div class="card-body">
              <div class="row">
                <div class="col-3 imagecol">
                  <img
                    src="../../../public/images/img3.jpg"
                    class="img-fluid"
                  />
                </div>
                <div
                  class="col-auto d-flex align-items-center justify-content-center flex-column"
                >
                  <p>mashael farajallah</p>
                  <p>مصصم واجهات</p>
                </div>
                <div class="col-auto d-flex align-items-center">
                  <a href="#">عرض الملف الشخصي</a>
                </div>
              </div>
            </div>
          </div>
          <div class="card my-4">
            <div class="card-body">
              <div class="row">
                <div class="col-3 imagecol">
                  <img
                    src="../../../public/images/img3.jpg"
                    class="img-fluid"
                  />
                </div>
                <div
                  class="col-auto d-flex align-items-center justify-content-center flex-column"
                >
                  <p>mashael farajallah</p>
                  <p>مصصم واجهات</p>
                </div>
                <div class="col-auto d-flex align-items-center">
                  <a href="#">عرض الملف الشخصي</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </diV>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import axios from "axios";

export default {
  data() {
    return {
      degitaldesgin: [],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },

  async mounted() {
    let result = await axios.get(
      "http://localhost:3000/degitaldesgin/" + this.$route.params.id
    );
    this.degitaldesgin = result.data;
    console.log(this.degitaldesgin);
  },
};
</script>

<style></style>
