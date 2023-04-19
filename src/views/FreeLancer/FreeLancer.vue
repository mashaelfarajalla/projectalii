<template>
  <div class="container mt-5 freelancer" style="padding: 25px 20px">
    <div class="row mt-5">
      <h2 class="mt-5">المستقلين</h2>
    </div>
    <div class="row">
      <div
        v-for="(item, index) in freelancer"
        :key="index"
        class="col-md-6 col-lg-3 my-3"
      >
        <div class="card">
          <img :src="item.image" class="card-img-top" alt="..." />
          <div class="card-body text-center">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">
              {{ item.department }}
            </p>
            <router-link
              :to="'/freelancer/freelancerprofile/' + item.id"
              class=""
              >عرض الملف الشخصي</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <startNow class="mt-5" />
</template>

<script>
import axios from "axios";
import StartNow from "../StartNow.vue";
export default {
  data() {
    return {
      freelancer: [],
    };
  },
  components: { StartNow },
  async mounted() {
    let result = await axios.get("http://localhost:3000/FreeLancer");
    this.freelancer = result.data;
  },
};
</script>

<style>
.freelancer .card {
  border-radius: 20px;
  box-shadow: 0px 2px 14px 1px #ebebeb9c;
  border: 0;
  align-items: center;
}

.freelancer .card-img-top {
  margin-top: 20px;
  border-radius: 50%;
  width: 85% !important;
}

.freelancer a {
  color: #0c52a1;
}
</style>
