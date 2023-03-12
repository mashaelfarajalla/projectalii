<template>
  <div class="container homesection1" style="position: relative">
    <div class="row justify-content-around">
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
            <input
              class="form-control col-10 me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button class="btn btn-outline-success col-2" type="submit">
              Search
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
          top: 44px;
          left: -230px;
          z-index: -1;
        "
      />
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
