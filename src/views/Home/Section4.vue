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
    // for (let i = 0; i <= result.data.length; i++) {
    //   if (i <= 3) {
    //     this.freelancer = result.data;
    //     this.freelancer = this.freelancer[i];
    //     console.log(i);
    //     console.log(this.freelancer);
    //   }
    // }
  },
};
</script>

<style></style>
