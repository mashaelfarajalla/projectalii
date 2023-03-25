<template>
  <section class="homesection4 mb-5 mt-5 bg-white">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="text-box text-center">
            <h2>المستقلين</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(item, index) in freelancer"
          :key="index"
          v-show="index <= 3"
          class="col-md-3 col-6 main"
          style="margin-top: 20px"
        >
          <div class="profile-card">
            <div class="img">
              <img :src="item.image" />
            </div>

            <div class="caption">
              <h3>{{ item.name }}</h3>
              <p>مطور الواجهات الامامية</p>
              <router-link
                :to="'/freelancer/freelancerprofile/' + item.id"
                class=""
                >عرض الملف الشخصي</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <SeeAll routername="FreeLancer" class="justify-content-end" />
    </div>
  </section>
</template>

<script>
import axios from "axios";

import SeeAll from "../SeeAll.vue";
export default {
  data() {
    return {
      freelancer: [],
    };
  },
  components: { SeeAll },
  async mounted() {
    let result = await axios.get("http://localhost:3000/FreeLancer");
    this.freelancer = result.data;
  },
};
</script>

<style>
.homesection4 {
  padding: 0px 0px 40px;
}

@media screen and (min-width: 992px) {
  .caption h3 {
    font-size: 21px;
  }

  .caption p {
    font-size: 15px;
  }

  .profile-card:hover .img {
    transform: translateY(-80px);
  }

  .caption {
    transform: translateY(-95px);
  }
  .profile-card {
    margin: 0 25px;
    width: 250px;
    height: 250px;
    padding: 30px;
  }

  .profile-card:hover {
    height: 290px;
  }
}

@media screen and (min-width: 768px) and (max-width: 992px) {
  .profile-card:hover .img {
    transform: translateY(-60px);
  }

  .caption h3 {
    font-size: 21px;
  }

  .caption p {
    font-size: 15px;
  }

  .caption {
    transform: translateY(-162px);
  }

  .profile-card:hover {
    height: 285px;
  }

  .homesection4 h2 {
    font-size: 50px;
    line-height: 100px;
  }

  .profile-card {
    width: 200px;
    height: 165px;
    padding: 15px;
  }
}

@media screen and (max-width: 767px) {
  .homesection4 {
    padding: 0px 0px 150px;
  }

  .caption h3 {
    font-size: 17px;
  }

  .caption p {
    font-size: 15px;
  }

  .profile-card:hover .img {
    transform: translateY(-60px);
  }

  .caption {
    transform: translateY(-130px);
  }

  .profile-card:hover {
    height: 255px;
  }

  .profile-card {
    width: 150px;
    height: 150px;
    padding: 18px;
  }
}

.homesection4 {
  background-color: #eaedef;

  margin-top: 100px;
}

.main {
  display: flex;
  justify-content: center !important;
  align-items: center;
}

.profile-card {
  position: relative;
  font-family: sans-serif;

  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 22px #3336;
  transition: 0.6s;
}

.profile-card:hover {
  border-radius: 10px;
}

.profile-card .img {
  position: relative;
  width: 100%;
  height: 100%;
  transition: 0.6s;
  z-index: 1;
}

.img img {
  width: 100%;
  border-radius: 50%;
  box-shadow: 0 0 22px #3336;
  transition: 0.6s;
}

.profile-card:hover img {
  border-radius: 10px;
}

.caption {
  text-align: center;

  opacity: 0;
  transition: 0.6s;
}

.profile-card:hover .caption {
  opacity: 1;
}

.caption h3 {
  font-family: sans-serif;
}

.caption a {
  color: #0c52a1;
  font-family: sans-serif;
  margin: 2px 0 9px 0;
}
.caption p {
  line-height: 20px;
}
</style>
