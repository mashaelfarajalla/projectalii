<template>
  <div class="homesection1">
    <div class="container-fluid">
      <div class="row justify-content-evenly">
        <img src="../../../public/images/backgroundd22.jpg" class="p-0" />
        <div class="divtitle">
          <h1>Are you looking for Freelancers?</h1>
          <h4>
            Hire Great Freelancers, Fast. Spacelance helps you hire elite
            freelancers at a moment's notice
          </h4>
          <p>{{ $t("message") }}</p>

          <div class="row mt-4 mb-5">
            <form class="d-flex justify-content-center">
              <button class="btn btn-outline-success col-lg-4" type="submit">
                ابدأ الان
              </button>
            </form>
          </div>

          <div
            class="text-center mt-5 hoverdivdowen"
            style="cursor: pointer; display: inline-block"
          >
            <a @click.prevent="scrollToSection1" href="#section1">
              <p>معلومات اكثر</p>
              <i class="fa-solid fa-angles-down"></i>
            </a>
          </div>
        </div>

        <!-- <div
          class="col-lg-5 text-start d-flex align-items-center justify-content-center flex-column"
        >
          <h1>Are you looking for Freelancers?</h1>
          <h4>
            Hire Great Freelancers, Fast. Spacelance helps you hire elite
            freelancers at a moment's notice
          </h4>
          <p>{{ $t("message") }}</p>

          <div class="row my-4">
            <form class="d-flex justify-content-center">
              <button class="btn btn-outline-success col-lg-4" type="submit">
                ابدأ الان
              </button>
            </form>
          </div>
        </div> -->
        <!-- <div class="col-lg-5">
          <img :src="image" class="img-fluid" />
        </div> -->
        <!-- <img
          src="../../../public/images/background-square-03-c58d9440.webp"
          style="
            width: 580px;
            position: absolute;
            top: 140px;
            right: -225px;
            z-index: -1;
          "
        /> -->
      </div>
    </div>
  </div>
  <div ref="section1" class="container my-5">
    <div class="row justify-content-between">
      <div v-for="(item, index) in company" :key="index" class="col-2">
        <div>
          <img :src="item.image" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="homesection2 my-5">
    <div class="bagsection2">
      <div class="container">
        <div class="row justify-content-between">
          <div
            class="col-lg-5 mt-5 text-end d-flex flex-column justify-content-center align-items-start"
          >
            <h2 data-text="AboutUs">من نحن</h2>
            <p class="mt-3">
              خدمات توظيف متكاملة لأصحاب الشركات والمشاريع، بتوفير كادر عمل عن
              بُعد بأفضل المهارات والكفاءات المطلوبة، ومختلف التخصصات، بدءاً من
              البحث عن المرشحين المؤهلين مروراً بمراحل التوظيف ووصولاً إلى إنشاء
              المهام وتسليمها من خلال منصة كفو وتقييم الموظف.
            </p>
            <SeeAll routername="About" class="d-none d-lg-block" />
          </div>
          <div class="col-lg-6 mt-5">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="../../../public/images/img4(1).jpg"
                    class="img-fluid"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../../../public/images/img4(2).jpg"
                    class="img-fluid"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../../../public/images/img4(2).jpg"
                    class="img-fluid"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <SeeAll routername="About" class="d-block d-lg-none" />
      </div>
    </div>
  </div> -->
</template>

<script>
import axios from "axios";
import { useI18n } from "vue-i18n";
export default {
  methods: {
    scrollToSection1() {
      this.$nextTick(() => {
        const section1 = "#section1";
        console.log("click");
        const el = this.$refs.section1;
        console.log(el);

        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      });
    },
  },
  data() {
    return {
      image: "images/img1.png",
      company: [],
    };
  },

  async mounted() {
    let result = await axios.get("http://localhost:3000/Supportingcompanies");
    this.company = result.data;
  },

  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });

    return { t };
  },
};
</script>

<style>
@media screen and (min-width: 992px) {
  .homesection1 {
    padding: 100px 0;
  }
}

@media screen and (max-width: 767px) {
}

@media screen and (min-width: 768px) and (max-width: 991px) {
}

.homesection1 .hoverdivdowen:hover i {
  margin-top: 10px;
  margin-bottom: 10px;

  transform: scale(0.9);
  transition: 0.2s;
}

.backgroundheader {
  background-color: #404040cf;
  position: absolute;
  width: 100%;
  height: 100%;
}
.homesection1 {
  position: relative;
}

.homesection1 .divtitle {
  position: absolute;
  color: white;
  width: 50%;
  top: 29%;
  text-align: center;
}

.homesection1 h1 {
  font-weight: 700;
  font-size: 54px;
  line-height: 98px;
  /* color: #0b1f63; */
  color: white;
}

.homesection1 h4 {
  font-weight: 400;
  font-size: 22px;
  line-height: 34px;
  /* color: #202a3e; */
  opacity: 0.6;
  color: white;
}

.homesection1 form .btn {
  width: 275px !important;
  background: white;
  color: #0b1f63;
}
</style>
