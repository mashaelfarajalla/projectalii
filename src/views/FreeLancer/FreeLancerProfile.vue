<template>
  <div class="container freelancerprofile mt-5">
    <div class="row" style="position: relative">
      <router-link
        :to="'/freelancer/'"
        class="btn-close"
        style="position: absolute; top: 0; right: -65px"
      ></router-link>
      <div class="col-lg-3">
        <div class="row">
          <div class="card" style="padding: 25px">
            <img :src="freelancer.image" class="card-img-top" alt="..." />
            <div class="card-body text-center">
              <h5 class="card-title">{{ freelancer.name }}</h5>
              <p class="card-text">
                {{ freelancer.department }}
              </p>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <h4>مواقع التواصل الاجتماعي</h4>
          <div class="row justify-content-center">
            <div
              v-for="(i, index) in freelancer.socialmedai"
              :key="index"
              class="col-2"
            >
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
          <h4 class="text-center">معلومات عامة</h4>
          <div
            v-for="(i, index) in freelancer.information"
            :key="index"
            class="row justify-content-center"
          >
            <div class="col-1">
              <i :class="i.icon"></i>
            </div>
            <div class="col-6">{{ i.information }}</div>
          </div>
        </div>
      </div>
      <div class="col-lg-9 text-end mt-5 px-5">
        <div class="row">
          <h3>نبذة تعريفية</h3>
          <p>
            {{ freelancer.biography }}
          </p>
        </div>
        <div class="row mt-4">
          <h3>المهارات</h3>

          <form class="row align-items-center d-none">
            <div class="col-4">
              <input
                type="text"
                name="text"
                id="txt"
                class="form-control"
                required
              />
            </div>

            <div class="col-3">
              <button
                @click.prevent="AddItem()"
                type="submit"
                class="btn btn-primary w-100"
              >
                اضافة
              </button>
            </div>
          </form>
          <div class="row items mt-2">
            <div class="col-auto item">
              HTML <span><i class="fa-solid fa-trash"></i></span>
            </div>
            <div class="col-auto item">
              JavaScript <span><i class="fa-solid fa-trash"></i></span>
            </div>
            <div class="col-auto item">
              Css <span><i class="fa-solid fa-trash"></i></span>
            </div>
          </div>
        </div>
        <div class="row mt-4 projects">
          <h3>معرض الاعمال</h3>
          <div class="row mt-2">
            <div
              v-for="(item, index) in projects"
              :key="index"
              class="col-lg-3 my-3"
              style="cursor: pointer"
            >
              <div class="card">
                <img :src="freelancer.image" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">المشروع الاول</h5>
                </div>
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
      freelancer: [],
      projects: 6,
    };
  },
  methods: {
    AddItem() {
      let inputtxt = document.getElementById("txt");
      let items = document.querySelector(".items");

      if (inputtxt.value != "") {
        const divitem = document.createElement("div");
        divitem.classList.add("item");
        divitem.classList.add("col-auto");

        divitem.innerHTML = inputtxt.value;
        items.appendChild(divitem);

        const span = document.createElement("span");
        span.innerHTML = '<i class="fa-solid fa-trash"></i>';
        divitem.appendChild(span);
      }
      inputtxt.value = "";
      const close = document.querySelectorAll("span");
      for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", () => {
          close[i].parentElement.style.display = "none";
          //لازم اشوف ال remove
          // close[i].parentElement.remove();
        });
      }
    },
  },
  async mounted() {
    let result = await axios.get(
      "http://localhost:3000/FreeLancer/" + this.$route.params.id
    );
    this.freelancer = result.data;
    console.log(result.data);
    const close = document.querySelectorAll("span");
    for (let i = 0; i < close.length; i++) {
      close[i].addEventListener("click", () => {
        close[i].parentElement.style.display = "none";
      });
    }
  },
};
</script>
