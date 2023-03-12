<template>
  <div class="bg-white homesection2 my-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 text-start">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat
            bibendum ornare urna, cursus eget convallis. Feugiat imperdiet
            posuere justo, ultrices interdum sed orci nunc, mattis. Ipsum
            viverra viverra neque adipiscing arcu, quam dictum. Dui mi viverra
            dui, sit accumsan, tincidunt massa. Dui cras magnis.
          </p>
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
                  src="../../../public/images/img1.png"
                  class="img-fluid"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../../../public/images/img1.png"
                  class="img-fluid"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../../../public/images/img1.png"
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
      <SeeAll />
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
