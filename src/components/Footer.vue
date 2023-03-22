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
<style>
@media screen and (min-width: 992px) {
  .footer .row {
    justify-content: center;
  }

  .footer .container {
    padding: 100px 55px;
  }
}

@media screen and (max-width: 767px) {
  .footer .container {
    padding: 100px 30px;
  }
}

@media screen and (min-width: 768px) and (max-width: 992px) {
  .footer .row {
    justify-content: space-between;
  }

  .footer .container {
    padding: 100px 55px;
  }
}

#page-content {
  flex: 1 0 auto;
}

footer {
  background-color: #090909;
}

.footer h5 {
  font-weight: 700;
  font-size: 1.65em;
  font-family: "Lora", sans-serif;
  line-height: 18px;
  margin: 0 0 14px 0;
  letter-spacing: -0.05em;
}

.footer p {
  /* text-align: left; */
  color: #252525;
  font-size: 1.1em;
  line-height: 26px;
  margin: 0 0 20px;
  font-family: "Poppins", sans-serif;
}

.footer ul li {
  color: #252525;
  list-style-type: none;
  line-height: 32px;
  font-size: 1em;
  /* text-align: left; */
}
</style>
