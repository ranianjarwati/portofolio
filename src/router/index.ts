import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../view/HomeView.vue";
import ProjectView from "../view/ProjectView.vue";
import ContactView from "../view/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  { path: "/", name: "home", component: HomeView },
  { path: "/project", name: "project", component: ProjectView },
  { path: "/contact", name: "contact", component: ContactView },
],

// Atur perilaku scroll di sini
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 }; // Kembali ke atas halaman jika pindah rute biasa
  },
  
})

export default router
