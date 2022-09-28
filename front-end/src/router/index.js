import { createWebHistory, createRouter } from "vue-router";
import MessagesList from "../components/MessagesList.vue";
import PostMessage from "../components/PostMessage.vue";
import Message from "../components/Message.vue";
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";

const routes = [
  {
    path: "/",
    component: MessagesList,
  },
  {
    path: "/new-message",
    component: PostMessage,
  },
  {
    path: "/message/:id",
    component: Message,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
