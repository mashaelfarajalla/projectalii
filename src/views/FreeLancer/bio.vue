<template>
  <div class="col-lg-9 text-end mt-5 px-5">
    <div class="row">
      <h3>نبذة تعريفية</h3>
      <p>
        {{ biography }}
      </p>
    </div>
    <div class="row mt-4">
      <h3>المهارات</h3>

      <form class="row align-items-center">
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
      <div class="row items mt-3">
        <div class="col-auto item" v-for="(item, index) in skills" :key="index">
          {{ item.skill }}
          <span class="iconclose"><i class="fa-solid fa-trash"></i></span>
        </div>
      </div>
    </div>
    <div class="row mt-4 projects">
      <div class="col">
        <h3>معرض الاعمال</h3>
      </div>
      <div class="col-auto">
        <button class="btn btnadd">اضافة مشروع جديد</button>
      </div>
      <div class="row mt-2">
        <div
          v-for="(item, index) in projects"
          :key="index"
          class="col-lg-3 my-3"
          style="cursor: pointer"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          @click="senddata(index)"
        >
          <div class="card">
            <img :src="item.imagecover" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
            </div>
          </div>
        </div>
        <!-- <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
        >
          <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  {{ project.title }}
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="row justify-content-center">
                  <swiper
                    ref="{swiperRef}"
                    :slidesPerView="1"
                    :centeredSlides="true"
                    :spaceBetween="30"
                    :pagination="{
                      type: 'fraction',
                    }"
                    :navigation="true"
                    :modules="modules"
                    class="mySwiper"
                  >
                    <swiper-slide
                      v-for="(item, index) in project.albumimage"
                      :key="index"
                      ><img :src="item.image" style="width: 40%; height: 378px"
                    /></swiper-slide>
                  </swiper>
                </div>
                <p class="append-buttons"></p>
                <div class="row">
                  <h5>المهارات المستخدمة</h5>
                  <div class="row">
                    <div
                      class="col-auto mx-2"
                      style="
                        padding: 16px;
                        background: #cecece66;
                        border-radius: 14px;
                      "
                    >
                      HTML
                    </div>
                    <div
                      class="col-auto mx-2"
                      style="
                        padding: 16px;
                        background: #cecece66;
                        border-radius: 14px;
                      "
                    >
                      JavaScript
                    </div>
                    <div
                      class="col-auto mx-2"
                      style="
                        padding: 16px;
                        background: #cecece66;
                        border-radius: 14px;
                      "
                    >
                      Css
                    </div>
                  </div>
                </div>

                <div class="row mt-4">
                  <h5>وصف تعرفي للمشروع</h5>
                  <div class="row">
                    <p>{{ project.Projectdescription }}</p>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["biography", "skills", "projects"],

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
  mounted() {
    const close = document.getElementsByClassName("iconclose");
    console.log(close);
    for (let i = 0; i < close.length; i++) {
      close[i].addEventListener("click", () => {
        close[i].parentElement.style.display = "none";
      });
    }
  },
};
</script>

<style>
.freelancerprofile .item {
  background: white;
  padding: 18px;
  border-radius: 25px;
  margin: 10px 5px;
  cursor: pointer;
}
.freelancerprofile .item:hover span,
.freelancerprofile .item:hover {
  background: #03114c;
  color: white;
}

.freelancerprofile .item span {
  cursor: pointer;
  margin: 0 8px;
  color: #03114c;
}

.freelancerprofile .item span:hover {
  color: red;
}
.freelancerprofile button.btn-primary {
  background: white;
  box-shadow: 3px 1px 15px #e2e2e2cc;
  border: 2px solid #03114c;
  color: #03114c;
  font-weight: bold;
}
</style>
