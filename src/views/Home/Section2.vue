<template>
  <div class="homesection2 my-5">
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
  </div>
</template>

<script>
import SeeAll from "../SeeAll.vue";
export default {
  components: { SeeAll },
};
</script>

<style>
.homesection2 .row {
  /* padding: 85px 0px; */
  padding: 40px 0px;
}
.homesection2 .bagsection2 {
  background-color: #001527a6;
  width: 100%;
  height: 100%;
}
.homesection2 h2 {
  color: white;
  /* -webkit-text-stroke: .2vw #0c52a1; */
}
.homesection2 p {
  color: white;
}

.homesection2 .carousel-control-next-icon,
.homesection2 .carousel-control-prev-icon {
  width: 3rem;
  background-size: 100% 26%;
  background-color: #00244ad1;
}

.homesection2 .lineseeall {
  background-color: white;
}
/* .homesection2 .col-auto a:hover {
  color: black !important;
}

.homesection2 .col-auto a:hover .lineseeall {
  background-color: rgb(0, 0, 0) !important;
} */
.homesection2 .col-auto a {
  color: white;
}

.homesection2 .carousel-indicators {
  bottom: -70px;
}

.homesection2 .carousel-indicators button {
  background-color: white;
  border-radius: 50%;
  width: 12px;
  height: 12px;
}
@media screen and (min-width: 992px) {
  .homesection2 .carousel-control-next-icon,
  .homesection2 .carousel-control-prev-icon {
    height: 9rem;
  }
}
@media screen and (max-width: 767px) {
  .homesection2 .carousel-control-next-icon,
  .homesection2 .carousel-control-prev-icon {
    height: 6rem;
  }
  .homesection2 .row {
    padding: 40px 15px !important;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .homesection2 .carousel-control-next-icon,
  .homesection2 .carousel-control-prev-icon {
    height: 9rem;
  }
}
</style>
