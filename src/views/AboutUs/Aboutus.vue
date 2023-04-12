<template>
  <div class="container my-5 aboutsection1" style="padding: 90px 20px">
    <div class="row my-5">
      <div class="col-6 text-end">
        <h2>من نحن</h2>
        <p>
          خدمات توظيف متكاملة لأصحاب الشركات والمشاريع، بتوفير كادر عمل عن بُعد
          بأفضل المهارات والكفاءات المطلوبة، ومختلف التخصصات، بدءاً من البحث عن
          المرشحين المؤهلين مروراً بمراحل التوظيف ووصولاً إلى إنشاء المهام
          وتسليمها من خلال منصة كفو وتقييم الموظف.
        </p>
      </div>
      <div class="col-6">
        <div
          style="
            display: flex;
            width: 460px;
            height: 460px;
            border-radius: 50%;
            background: #fff;
            margin: 0 auto;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 5px 12px 7px #c4c4c4;
          "
        >
          <!-- <iframe
            width="420"
            height="345"
            :src="datassrc"
            muted
            autoplay
            controls
          ></iframe> -->

          <img src="../../../public/images/img1.png" width="405" height="405" />
          <a
            href="#"
            data-fancybox
            data-caption="Single image"
            style="position: absolute"
          >
            <img
              src="../../../public/images/189638.png"
              style="width: 56px; height: 56px"
            />
          </a>
          <!-- <iframe
            style="border-radius: 50%"
            width="430"
            height="430"
            src="https://www.youtube.com/embed/JqQmWvfpCiY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> -->
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div
        v-for="(item, index) in aboutsection"
        :key="index"
        class="col-lg-4 text-end"
      >
        <h3><img :src="item.icon" /> {{ item.title }}</h3>
        <ul>
          <li v-for="i in item.child" :key="i.id">{{ i.name }}</li>
        </ul>
      </div>
    </div>
  </div>
  <section6Vue />
  <StartNow />
  <div class="container aboutsection1 my-5">
    <div class="row">
      <div class="col">
        <h2>أسئلة وأجوبة</h2>
      </div>
    </div>
    <div class="row text-end">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div
          v-for="(item, index) in Questions"
          :key="index"
          class="accordion-item"
        >
          <h2 class="accordion-header" :id="item.id">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#' + item.target"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <img
                src="../../../public/images/question-mark-5838.png"
                style="width: 20px; height: 20px; margin: 0 10px"
              />
              {{ item.question }}
            </button>
          </h2>
          <div
            :id="item.target"
            class="accordion-collapse collapse"
            :aria-labelledby="item.id"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">{{ item.answer }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import section6Vue from "@/views/Home/Section6.vue";
import axios from "axios";
import StartNow from "../StartNow.vue";
export default {
  data() {
    return {
      aboutsection: [],
      Questions: [
        {
          id: 1,
          question: " كم سعر خدمة التوظيف؟",
          answer: " سعر خدمة التوظيف من كفو مجاناً ",
          target: "one",
        },
        {
          id: 2,
          question: " كم سعر خدمة التوظيف؟",
          answer: " سعر خدمة التوظيف من كفو مجاناً ",
          target: "two",
        },
        {
          id: 3,
          question: " كم سعر خدمة التوظيف؟",
          answer: " سعر خدمة التوظيف من كفو مجاناً ",
          target: "tree",
        },
        {
          id: 4,
          question: " كم سعر خدمة التوظيف؟",
          answer: " سعر خدمة التوظيف من كفو مجاناً ",
          target: "four",
        },
        {
          id: 5,
          question: " كم سعر خدمة التوظيف؟",
          answer: " سعر خدمة التوظيف من كفو مجاناً ",
          target: "five",
        },
      ],
    };
  },
  components: { section6Vue, StartNow },
  async mounted() {
    let result = await axios.get("http://localhost:3000/aboutsection");
    this.aboutsection = result.data[0];
    console.log(result.data);
  },
};
</script>

<style>
.aboutsection1 .row ul {
  height: 255px;
  background: #4a757bb8;
  padding: 44px;
  /* box-shadow: 6px 24px 25px 5px rgb(135 135 135 / 20%); */
  box-shadow: 0px 13px 19px rgb(183 187 192 / 40%);
}

.aboutsection1 .row ul li {
  list-style-type: none;
}

.aboutsection1 .accordion-button {
  background-color: white;
  height: 65px;
}

.aboutsection1 .accordion-button:focus {
  border-color: transparent;
  box-shadow: inset 0 0px 0 transparent;
}

.aboutsection1 .accordion-button.collapsed {
  background-color: #adc5c8;
  height: 65px;
}

.aboutsection1 .collapsed:hover {
  background-color: #4a757bb8;
  color: white;
}

.aboutsection1 .accordion-item {
  background: transparent;
  margin-bottom: 20px;
  border: 0px;
}

.aboutsection1 .accordion-body {
  background-color: white;
}

.aboutsection1 .accordion-button::after {
  margin-right: auto;
  margin-left: 0;
}
</style>
