import { createRouter, createWebHistory } from "vue-router";
import CartView from "../views/cart/CartView.vue";
import HistoryView from "../views/history/HistoryView";
import HomeView from "../views/home/HomeView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/cart", name: "Cart", component: CartView },
  { path: "/history", name: "History", component: HistoryView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
