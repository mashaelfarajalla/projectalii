<template>
  <div class="col-lg-3">
    <div class="row">
      <div class="card align-items-center" style="padding: 25px">
        <img :src="image" class="card-img-top" alt="..." />
        <div class="card-body text-center">
          <h5 class="card-title">{{ name }}</h5>
          <p class="card-text">
            {{ dep }}
          </p>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <h4>مواقع التواصل الاجتماعي</h4>
      <div class="row justify-content-center mt-2">
        <div v-for="(i, index) in socialmedai" :key="index" class="col-2">
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
        v-for="(i, index) in informations"
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
    <div class="row mt-5">
      <button class="btn btnadd">تعديل</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "name", "dep", "socialmedai", "informations"],
};
</script>

<style>
.freelancerprofile .card img {
  border-radius: 50%;
}

.freelancerprofile .circle {
  width: 40px;
  height: 40px;
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid #03114c;

  color: #03114c;
}

.freelancerprofile .circle:hover {
  background-color: #03114c;
  border-radius: 50%;
  border: 2px solid white;
  color: white;
}
</style>
