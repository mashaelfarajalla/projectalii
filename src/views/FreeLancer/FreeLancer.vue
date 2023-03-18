<template>
  <div class="container mt-5 freelancer">
    <div class="row">
      <h2>المستقلين</h2>
    </div>
    <div class="row">
      <div
        v-for="(item, index) in freelancer"
        :key="index"
        class="col-lg-3 my-3"
      >
        <div class="card">
          <img :src="item.image" class="card-img-top" alt="..." />
          <div class="card-body">
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
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      freelancer: [],
    };
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/FreeLancer");
    this.freelancer = result.data;
  },
};
</script>

<style></style>
