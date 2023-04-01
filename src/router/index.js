import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/Home.vue";
import About from "@/views/AboutUs/Aboutus.vue";
import FreeLancer from "@/views/FreeLancer/FreeLancer.vue";
import FreeLancerProfile from "@/views/FreeLancer/FreeLancerProfile.vue";
import CountactUs from "@/views/Countactus/CountactUs.vue";
import Projects from "@/views/Projects/Projects.vue";
import Projectdetails from "@/views/Projects/Projectdetails.vue";



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
  {
    path: "/countactus",
    name: "CountactUs",
    component: CountactUs,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/projects/Projectdetails/:id",
    name: "Projectdetails",
    component: Projectdetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
