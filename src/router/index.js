import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/Home.vue";
import About from "@/views/AboutUs/Aboutus.vue";
import FreeLancer from "@/views/FreeLancer/FreeLancer.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
