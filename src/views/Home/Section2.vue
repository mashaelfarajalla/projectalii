<template>
  <div class="homesection2 my-5">
    <div class="bagsection2">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 text-end d-flex flex-column justify-content-center align-items-start"
          >
            <h2 data-text="AboutUs">من نحن</h2>
            <p>
              خدمات توظيف متكاملة لأصحاب الشركات والمشاريع، بتوفير كادر عمل عن
              بُعد بأفضل المهارات والكفاءات المطلوبة، ومختلف التخصصات، بدءاً من
              البحث عن المرشحين المؤهلين مروراً بمراحل التوظيف ووصولاً إلى إنشاء
              المهام وتسليمها من خلال منصة كفو وتقييم الموظف.
            </p>
            <SeeAll />
          </div>
          <div class="col-lg-6">
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
                <!-- <div class="carousel-item">
                  <img
                    src="../../../public/images/img1.png"
                    class="img-fluid"
                    alt="..."
                  />
                </div> -->
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

<style></style>
