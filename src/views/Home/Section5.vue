<template>
  <div class="homesection5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-auto">
          <h2>مشاريع في كافة المجالات</h2>
          <p class="text-center">
            تصفح المشاريع وأنجز الأعمال المختصة بمهاراتك
          </p>
        </div>
      </div>
      <div
        class="row justify-content-center"
        style="position: relative; z-index: 1"
      >
        <div
          v-for="(item, index) in number"
          :key="index"
          class="col-10 col-md-5 col-lg-auto mx-3 my-4 item"
        >
          <img
            src="../../../public/images/11331m.png"
            class=""
            style="max-width: 250px"
          />
          <!-- <i class="fa-solid fa-gear" style="font-size: 60px"></i> -->
          <div class="overlay">
            <div class="text text-white">
              <h5 class="mt-5">Easy Deployments</h5>
              <a href="#" class="mt-5">قراءة المزيد</a>
            </div>
          </div>
        </div>
      </div>
      <img
        class="imagebackground d-sm-none d-lg-block"
        src="../../../public/images/background-square-03-c58d9440.webp"
        style=""
      />
      <SeeAll routername="Projects" style="position: relative; z-index: 1" />
    </div>
  </div>
</template>

<script>
import SeeAll from "../SeeAll.vue";
export default {
  components: { SeeAll },
  data() {
    return {
      number: 3,
    };
  },
};
</script>

<style>
.homesection5 {
  padding: 60px 0;
  position: relative;
  background: #f7f8fc;
}

.homesection5 .row .item {
  position: relative;
  border-radius: 40px;
  padding: 55px;
  background-color: #f7f8fc;
  box-shadow: -15px -15px 20px rgb(255 255 255 / 80%),
    15px 15px 20px rgb(57 65 124 / 8%);
}

.homesection5 .row .item:hover .overlay {
  opacity: 85%;
  cursor: pointer;
}

.homesection5 .overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #000949;
  border-radius: 40px;
}
.homesection5 .text {
  /* color: #fdfdfd; */
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  top: 50%;
}

.homesection5 .imagebackground {
  position: absolute;
  z-index: 0;
}

@media screen and (min-width: 992px) {
  .homesection5 .imagebackground {
    top: 94px;
    right: -117px;
  }
}

@media screen and (max-width: 767px) {
  .homesection5 .imagebackground {
    display: none;
  }
}

@media screen and (min-width: 768px) and (max-width: 992px) {
  .homesection5 .imagebackground {
    display: none;
  }
}
</style>
