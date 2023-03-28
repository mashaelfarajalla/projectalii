<template>
  <div class="container freelancerprofile mt-5" style="padding: 90px 20px">
    <div class="row" style="position: relative">
      <router-link
        :to="'/freelancer/'"
        class="btn-close"
        style=""
      ></router-link>
      <div class="col-lg-3">
        <div class="row">
          <div class="card" style="padding: 25px">
            <img :src="freelancer.image" class="card-img-top" alt="..." />
            <div class="card-body text-center">
              <h5 class="card-title">{{ freelancer.name }}</h5>
              <p class="card-text">
                {{ freelancer.department }}
              </p>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <h4>مواقع التواصل الاجتماعي</h4>
          <div class="row justify-content-center mt-2">
            <div
              v-for="(i, index) in freelancer.socialmedai"
              :key="index"
              class="col-2"
            >
              <a href="#"
                ><div
                  class="circle d-flex justify-content-center align-items-center"
                >
                  <i :class="i.icon"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <h4 class="">معلومات عامة</h4>
          <div
            v-for="(i, index) in freelancer.information"
            :key="index"
            class="row align-items-center my-2"
          >
            <div class="col-2">
              <i :class="i.icon" style="font-size: 24px"></i>
            </div>
            <div class="col-auto" style="font-size: 22px">
              {{ i.information }}
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-9 text-end mt-5 px-5">
        <div class="row">
          <h3>نبذة تعريفية</h3>
          <p>
            {{ freelancer.biography }}
          </p>
        </div>
        <div class="row mt-4">
          <h3>المهارات</h3>

          <form class="row align-items-center d-none">
            <div class="col-4">
              <input
                type="text"
                name="text"
                id="txt"
                class="form-control"
                required
              />
            </div>

            <div class="col-3">
              <button
                @click.prevent="AddItem()"
                type="submit"
                class="btn btn-primary w-100"
              >
                اضافة
              </button>
            </div>
          </form>
          <div class="row items mt-2">
            <div class="col-auto item">
              <i class="fa-solid fa-tag"></i>
              HTML <span><i class="fa-solid fa-trash"></i></span>
            </div>
            <div class="col-auto item">
              <i class="fa-solid fa-tag"></i>
              JavaScript <span><i class="fa-solid fa-trash"></i></span>
            </div>
            <div class="col-auto item">
              <i class="fa-solid fa-tag"></i>
              Css <span><i class="fa-solid fa-trash"></i></span>
            </div>
          </div>
        </div>
        <div class="row mt-4 projects">
          <h3>معرض الاعمال</h3>
          <div class="row mt-2">
            <div
              v-for="(item, index) in freelancer.projects"
              :key="index"
              class="col-lg-3 my-3"
              style="cursor: pointer"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="senddata(index)"
            >
              <div class="card">
                <img :src="item.imagecover" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                </div>
              </div>
            </div>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
            >
              <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      {{ project.title }}
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="row justify-content-center">
                      <swiper
                        ref="{swiperRef}"
                        :slidesPerView="1"
                        :centeredSlides="true"
                        :spaceBetween="30"
                        :pagination="{
                          type: 'fraction',
                        }"
                        :navigation="true"
                        :modules="modules"
                        class="mySwiper"
                      >
                        <swiper-slide
                          v-for="(item, index) in project.albumimage"
                          :key="index"
                          ><img
                            :src="item.image"
                            style="width: 40%; height: 378px"
                        /></swiper-slide>
                      </swiper>
                    </div>
                    <p class="append-buttons"></p>

                    <div class="row">
                      <p>{{ project.Projectdescription }}</p>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <!-- <button type="button" class="btn btn-primary">
                      Save changes
                    </button> -->
                  </div>
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
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  data() {
    return {
      freelancer: [],
      project: [],
    };
  },
  methods: {
    senddata(index) {
      console.log(index);
      this.project = this.freelancer.projects[index];
      console.log(this.project);
    },

    AddItem() {
      let inputtxt = document.getElementById("txt");
      let items = document.querySelector(".items");

      if (inputtxt.value != "") {
        const divitem = document.createElement("div");
        divitem.classList.add("item");
        divitem.classList.add("col-auto");

        divitem.innerHTML = inputtxt.value;
        items.appendChild(divitem);

        const span = document.createElement("span");
        span.innerHTML = '<i class="fa-solid fa-trash"></i>';
        divitem.appendChild(span);
      }
      inputtxt.value = "";
      const close = document.querySelectorAll("span");
      for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", () => {
          close[i].parentElement.style.display = "none";
          //لازم اشوف ال remove
          // close[i].parentElement.remove();
        });
      }
    },
  },
  async mounted() {
    let result = await axios.get(
      "http://localhost:3000/FreeLancer/" + this.$route.params.id
    );
    this.freelancer = result.data;
    console.log(result.data);
    const close = document.querySelectorAll("span");
    for (let i = 0; i < close.length; i++) {
      close[i].addEventListener("click", () => {
        close[i].parentElement.style.display = "none";
      });
    }
  },
};
</script>
<style>
.freelancerprofile .modal-body .swiper-slide {
  display: flex !important;
  align-items: center;
  justify-content: center;
}
.freelancerprofile .modal-header .btn-close {
  top: 20px;
  left: 25px;
  right: auto !important;
}

@media screen and (min-width: 992px) {
  .freelancerprofile .btn-close {
    top: 0;
    right: -65px;
  }
}

@media screen and (max-width: 767px) {
  .freelancerprofile .btn-close {
    top: -35px;
    right: 18px;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .freelancerprofile .btn-close {
    top: 0;
    right: -65px;
  }
}
.freelancerprofile .btn-close {
  position: absolute;
}
</style>
