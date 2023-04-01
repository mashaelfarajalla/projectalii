<template>
  <div class="projectdetails">
    <div class="container">
      <div class="row" style="padding: 175px 0">
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
              v-for="(item, index) in project.imagechild"
              :key="index"
            >
              <img :src="item.imagechilds" />
            </swiper-slide>
          </swiper>

          <h3>{{ project.title }}</h3>
          <p>{{ project.detalis }}</p>
        </div>
        <div class="col-4">
          <h3>المهارات المستخدمة</h3>
          <div class="row">
            <div
              class="col-auto mx-2"
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
              class="col-auto mx-2"
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
              class="col-auto mx-2"
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

          <h3>المستقلين</h3>
          <div class="card">
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
export default {
  data() {
    return {
      project: [],
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
      "http://localhost:3000/projects/" + this.$route.params.id
    );
    this.project = result.data;
    console.log(this.project);
  },
};
</script>

<style>
@media (min-width: 1400px) {
  .projectdetails .container,
  .projectdetails .container-lg,
  .projectdetails .container-md,
  .projectdetails .container-sm,
  .projectdetails .container-xl,
  .projectdetails .container-xxl {
    max-width: 1590px;
  }
}
.projectdetails .swiper-pagination-progressbar {
  background: white !important;
}
.projectdetails .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background: #030357;}

.projectdetails .swiper-wrapper {
  margin-top: 20px;
}

.projectdetails .swiper-button-prev,
.projectdetails .swiper-button-next {
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 50%;
}
.projectdetails .swiper-button-next:after,
.projectdetails .swiper-button-prev:after {
  font-size: 25px !important;
}

.projectdetails .card-body .imagecol,
.projectdetails .card-body .imagecol img {
  border-radius: 50%;
}
.projectdetails .card {
  border: 0;
  border-radius: 25px;
  box-shadow: 0px 10px 5px -5px rgba(164 164 164 / 30%);
}
.projectdetails .card-body p {
  margin-bottom: 0;
}
</style>
