<template>
  <div class="container freelancerprofile mt-5" style="padding: 90px 20px">
    <div class="row" style="position: relative">
      <router-link
        :to="'/freelancer/'"
        class="btn-close"
        style=""
      ></router-link>

      <information
        :image="freelancer.image"
        :name="freelancer.name"
        :dep="freelancer.department"
        :socialmedai="freelancer.socialmedai"
        :informations="freelancer.information"
      />

      <bio
        :biography="freelancer.biography"
        :skills="freelancer.skills"
        :projects="freelancer.projects"
      />
    </div>
  </div>
</template>
<script>
import information from "./information.vue";
import bio from "./bio.vue";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    information,
    bio,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  data() {
    return {
      freelancer: [],
      project: [],
    };
  },
  methods: {
    senddata(index) {
      console.log(index);
      this.project = this.freelancer.projects[index];
      console.log(this.project);
    },
  },
  async mounted() {
    let result = await axios.get(
      "http://localhost:3000/FreeLancer/" + this.$route.params.id
    );
    this.freelancer = result.data;
    console.log(result.data);
  },
};
</script>
<style>





.freelancerprofile .projects .card {
  background-color: transparent;
  border: 0;
}

.freelancerprofile .projects .card .card-img-top {
  border-radius: 0;
}

.freelancerprofile .modal-body .swiper-slide {
  display: flex !important;
  align-items: center;
  justify-content: center;
}
.freelancerprofile .modal-header .btn-close {
  top: 20px;
  left: 25px;
  right: auto !important;
}

.freelancerprofile
  .swiper-pagination.swiper-pagination-fraction.swiper-pagination-horizontal {
  width: 10%;
  padding: 10px;

  background: black;
  color: white;
}
.freelancerprofile .btnadd {
  background-color: #03114c;
  color: white;
  font-weight: bold;
}

@media screen and (min-width: 992px) {
  .freelancerprofile .btn-close {
    top: 0;
    right: -65px;
  }
}

@media screen and (max-width: 767px) {
  .freelancerprofile .btn-close {
    top: -35px;
    right: 18px;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .freelancerprofile .btn-close {
    top: 0;
    right: -65px;
  }
}
.freelancerprofile .btn-close {
  position: absolute;
}
</style>
