<template>
  <div class="homesection1">
    <div class="container">
      <div class="row justify-content-between">
        <div
          class="col-lg-5 text-start d-flex align-items-center justify-content-center flex-column"
        >
          <h1>Are you looking for Freelancers?</h1>
          <h4>
            Hire Great Freelancers, Fast. Spacelance helps you hire elite
            freelancers at a moment's notice
          </h4>

          <div class="row my-4">
            <form class="d-flex justify-content-center">
              <button class="btn btn-outline-success col-lg-4" type="submit">
                ابدأ الان
              </button>
            </form>
          </div>
        </div>
        <div class="col-lg-6">
          <img :src="image" class="img-fluid" />
        </div>
        <img
          src="../../../public/images/background-square-03-c58d9440.webp"
          style="
            width: 580px;
            position: absolute;
            top: 140px;
            right: -225px;
            z-index: -1;
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "images/img1.png",
    };
  },
};
</script>

<style></style>
