<template>
  <div id="" class="projectpage container-fluid">
    <div class="row">
      <h2>المشاريع</h2>

      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Home
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Profile
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Contact
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          Home
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          profile
        </div>
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          ...contact
        </div>
      </div>

      <!-- <ul class="text-center">
        <li class="d-inline" data-class="all">
          <a href="#all">all</a>
        </li>
        <li
          v-for="(i, index) in items"
          :key="index"
          class="d-inline"
          :class="items.active"
          :data-class="i.dot + i.href"
          @click="dataitem(index)"
        >
          <a :href="'#' + i.href">{{ i.title }}</a>
        </li>
      </ul>
      <div class="container-fluid mt-5">
        <div class="shuffle-images">
          <div class="row">
            <div
              v-for="(i, index) in project.children"
              :key="index"
              class="col-6 col-md-3 p-0 position"
              :class="project.href"
            >
              <div class="port">
                <img :src="i.image" class="img-fluid" />
                <div class="overlay">
                  <div class="text text1">
                    <div class="borderline"></div>
                    <h5>{{ i.title }}</h5>
                    <p>{{ i.span }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, title: "الكل", href: "all", dot: "", active: "active" },
        {
          id: 2,
          title: "التصميم",
          href: "print",
          dot: ".",
          children: [
            {
              image: "images/6.png",
              title: "Books",
              span: "print / news",
            },
            {
              image: "images/7.png",
              title: "Catalogs",
              span: "print / t-mobiles",
            },
          ],
        },
        {
          id: 3,
          title: "ANIMATION",
          href: "animation",
          dot: ".",
          children: [
            {
              image: "images/5.png",
              title: "carving",
              span: "animation / carving",
            },
          ],
        },
        {
          id: 4,
          title: "الرسم",
          href: "art",
          dot: ".",
          children: [
            {
              image: "images/2.png",
              title: "T-SHIRT DESIGN",
              span: "art / t-shirt",
            },
          ],
        },
        {
          id: 5,
          title: "الويب",
          href: "web",
          dot: ".",
          children: [
            {
              image: "images/1.png",
              title: "bootstrap4",
              span: "web / t-shirt",
            },
            {
              image: "images/4.png",
              title: "responsive",
              span: "web / mobile",
            },
          ],
        },
        {
          id: 6,
          title: "الفوتوغرافر",
          href: "photography",
          dot: ".",
          children: [
            {
              image: "images/3.png",
              title: "Note Bools",
              span: "photography / books",
            },
          ],
        },
        {
          id: 7,
          title: "الفيديو",
          href: "video",
          dot: ".",
          children: [
            {
              image: "images/8.png",
              title: "Show",
              span: "video / screens",
            },
          ],
        },
      ],
      project: [],
    };
  },
  methods: {
    dataitem(id) {
      this.project = this.items[id];
    },
  },
  mounted() {
    this.dataitem(0);
    // Start portfolio

    $(".projectpage ul li").on("click", function () {
      $(this).addClass("active").siblings().removeClass("active");

      if ($(this).data("class") === "all") {
        $(".shuffle-images .col-md-3").delay(300).fadeIn();
      } else {
        $(".shuffle-images .col-md-3").fadeOut();
        $($(this).data("class")).delay(300).fadeIn();
      }
    });

    // End portfolio
  },
};
</script>

<style>
.projectpage ul li {
  margin: 0px 5px;
  font-size: 21px;
  padding: 8px 28px;
}
.projectpage ul li:hover,
.projectpage ul li.active {
  background: white;
  box-shadow: 0 0 10px #e9e9e9;
}
.projectpage ul li:hover a,
.projectpage ul li.active a {
  color: #000949;
}

.projectpage .row .position:hover .overlay {
  opacity: 85%;
  cursor: pointer;
}
.projectpage .position {
  position: relative;
}

.projectpage .overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #000949;
}
.projectpage .text {
  color: white;
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  top: 50%;
}
</style>
