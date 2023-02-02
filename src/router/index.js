import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SettingsView from "../views/SettingsView.vue";
import ProfileView from "../views/ProfileView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import CoursesView from "../views/CoursesView.vue";
import FreindsView from "../views/FriendsView.vue";
import FilesView from "../views/FilesView.vue";
import PlansView from "../views/PlansView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
    },
    {
      path: "/courses",
      name: "courses",
      component: CoursesView,
    },
    {
      path: "/friends",
      name: "friends",
      component: FreindsView,
    },
    {
      path: "/files",
      name: "files",
      component: FilesView,
    },
    {
      path: "/plans",
      name: "plans",
      component: PlansView,
    },
  ],
});

export default router;
