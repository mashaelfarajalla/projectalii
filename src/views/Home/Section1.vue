<template>
  <div class="container homesection1">
    <div class="row justify-content-around">
      <div
        class="col-lg-5 text-start d-flex align-items-center justify-content-center flex-column"
      >
        <h1>Are you looking for Freelancers?</h1>
        <h4>
          Hire Great Freelancers, Fast. Spacelance helps you hire elite
          freelancers at a moment's notice
        </h4>
      </div>
      <div class="col-lg-6">
        <img :src="image" class="img-fluid" />
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
