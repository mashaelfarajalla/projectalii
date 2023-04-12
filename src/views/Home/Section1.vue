<template>
  <div class="homesection1">
    <div class="container">
      <div class="row justify-content-evenly">
        <div
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
        </div>
        <div class="col-lg-5">
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
import { useI18n } from "vue-i18n";

export default {
  data() {
    return {
      image: "images/img1.png",
    };
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
    padding: 170px 0;
  }
}

@media screen and (max-width: 767px) {
}

@media screen and (min-width: 768px) and (max-width: 991px) {
}

.backgroundheader {
  background-color: #404040cf;
  position: absolute;
  width: 100%;
  height: 100%;
}

.homesection1 h1 {
  font-weight: 700;
  font-size: 54px;
  line-height: 98px;
  color: #0b1f63;
}

.homesection1 h4 {
  font-weight: 400;
  font-size: 22px;
  line-height: 34px;
  color: #202a3e;
  opacity: 0.6;
}

.homesection1 form .btn {
  width: 275px !important;
}
</style>
