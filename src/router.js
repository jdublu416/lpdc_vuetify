import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/work",
      name: "work",
      component: () =>
      import("./views/Work.vue")
    },
    {
      path: "/services",
      name: "services",
      component: () =>
      import("./views/Services.vue")
    },
    {
      path: "/insights",
      name: "insights",
      component: () =>
      import("./views/Insights.vue")
    },
    {
      path: "/careers",
      name: "careers",
      component: () =>
      import("./views/Careers.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import("./views/About.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import("./views/Contact.vue")
    }
  ]
});
