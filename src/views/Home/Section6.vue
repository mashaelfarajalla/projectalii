<template>
  <div class="bg-white homeservers" style="padding: 60px 0">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-auto mt-5">
          <h2>الخدمات</h2>
          <p class="text-center">وظف محترفين في جميع المجالات</p>
        </div>
      </div>
      <div class="row d-flex align-items-center justify-content-between">
        <div class="col-lg-auto">
          <div
            class="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              v-for="(item, index) in Services"
              :key="index"
              class="nav-link"
              :class="item.active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
              @click="Serversdetails(index)"
            >
              {{ item.title }}
            </button>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <div class="imgbg">
                <img
                  :src="serversdetails.images"
                  class="w-100"
                  style="max-height: 350px"
                />
              </div>
              <div class="row mt-3">
                <p
                  class="col-auto mx-2"
                  style="
                    background: white;
                    padding: 18px;
                    border-radius: 45px;
                    box-shadow: 4px 4px 8px #bfbfbf;
                  "
                  v-for="(i, index) in serversdetails.services"
                  :key="index"
                >
                  {{ i.servicename }}
                </p>
              </div>
            </div>
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
      Services: [],
      serversdetails: [],
    };
  },
  methods: {
    Serversdetails(index) {
      console.log(index);
      this.serversdetails = this.Services[index];
      console.log(this.serversdetails);
    },
  },

  async mounted() {
    let result = await axios.get("http://localhost:3000/Services");
    this.Services = result.data[0];
    console.log(this.Services);
    this.Serversdetails("Implementationofblueprints");
  },
};
</script>

<style>
@media screen and (min-width: 992px) {
  .homeservers button.nav-link {
    width: 400px;
  }
}

@media screen and (max-width: 767px) {
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .homeservers button.nav-link {
    width: 400px;
  }
}

.homeservers button.nav-link {
  display: flex;
  align-items: center;
  margin: 9px 0;
  box-shadow: 10px 10px 10px #e4e4e4;

  justify-content: center;
  position: relative;
  height: 55px;
  text-align: center;
  transition: 0.3s;
  color: #392c23;
  font-size: 20px;
  background: linear-gradient(to right, #fff 50%, #15014e 50%);
  background-size: 200% 100%;
  background-position: left;
  text-decoration: none;
}
.homeservers button.nav-link.active,
.homeservers button:hover {
  /* background-color: #15014e; */
  color: white;
  background-position: right;
}
</style>
