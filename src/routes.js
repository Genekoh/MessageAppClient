import { createRouter, createWebHistory } from "vue-router";

const LogIn = () => import("./pages/LogIn.vue");
const SignUp = () => import("./pages/SignUp.vue");
const Messages = () => import("./pages/Messages.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", name: "LoginRoute", component: LogIn },
    { path: "/signup", name: "SignupRoute", component: SignUp },
    { path: "/messages/:contact?", name: "MessagesRoute", component: Messages },
  ],
});

export default router;
