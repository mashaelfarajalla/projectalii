import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/Home.vue";
import About from "@/views/AboutUs/Aboutus.vue";
import FreeLancer from "@/views/FreeLancer/FreeLancer.vue";
import FreeLancerProfile from "@/views/FreeLancer/FreeLancerProfile.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/freelancer",
    name: "FreeLancer",
    component: FreeLancer,
  },
  {
    path: "/freelancer/freelancerprofile/:id",
    name: "FreeLancerProfile",
    component: FreeLancerProfile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
