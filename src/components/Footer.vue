<template>
  <div id="page-content" class="footer bg-white">
    <div class="container text-center" style="">
      <div class="row align-items-baseline">
        <div class="col-lg-3 text-white text-start">
          <img
            src="../../public/images/logo.png"
            style="width: 280px; height: 65px"
          />

          <p class="mt-4">
            Powerful Freelance Marketplace System with ability to change the
            Users (Freelancers & Clients)
          </p>
        </div>
        <div
          v-for="item in item"
          :key="item.id"
          class="col-md-auto col-lg-3 text-start"
        >
          <h5>{{ item.title }}</h5>
          <ul class="p-0 mt-4">
            <li v-for="i in item.children" :key="i.id">{{ i.navbar }}</li>
          </ul>
          <a v-show="item.show" style="color: #ad9263"
            >Viwe All <i class="fa-solid fa-arrow-right-long"></i
          ></a>
        </div>
        <div class="col-md-auto col-lg-3 text-start">
          <h5>Call Us</h5>
          <ul class="p-0 mt-4">
            <li class="mb-3">
              <i class="fa-solid fa-location-dot me-3"></i>Kenya
            </li>
            <li class="mb-3">
              <i class="fa-solid fa-phone me-3"></i>(800) 123-4657
            </li>
            <li class="mb-3">
              <i class="fa-regular fa-envelope me-3"></i>porto@portotheme.com
            </li>

            <li>
              <i
                v-for="i in SocialContact"
                :key="i.id"
                :class="i.icon"
                class="me-3"
              ></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <footer id="sticky-footer" class="flex-shrink-0 py-4 text-white-50">
    <div class="container text-center">
      <small>Porto Law © 2022. All Rights Reserved.</small>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      item: [
        {
          id: 1,
          title: "For Clients",
          children: [
            { id: 1, navbar: "Home", router: "Home" },
            { id: 2, navbar: "Projects", router: "Home" },
            { id: 3, navbar: "FreeLancers", router: "Home" },
            { id: 4, navbar: "About Us", router: "Home" },
            { id: 5, navbar: "Groups", router: "Home" },
          ],
        },
        {
          id: 2,
          title: "For Freelancers ",
          children: [
            { id: 1, navbar: "Find Work", router: "Home" },
            { id: 2, navbar: " Create Account", router: "Home" },
          ],
        },
      ],
      SocialContact: [
        { id: 1, icon: "fa-brands fa-facebook-f" },
        { id: 2, icon: "fa-brands fa-twitter" },
        { id: 3, icon: "fa-brands fa-instagram" },
      ],
    };
  },
};
</script>
