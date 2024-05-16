import { createRouter, createWebHistory } from 'vue-router'
import AuthRoutes from '@/packages/Auth/routes/routes'
import  useModelAuth  from '@/models/Auth';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
    meta: {
      unprotected:true,
      title:'Tela inicial'
  },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/DashboardView.vue"),
    meta: {
      title:'Dashboard'
  },
  },
...AuthRoutes,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title;

  const auth = useModelAuth();

  if (!to.meta.unprotected) {
    auth.getIsAuth ? next() : next('/login');
  } else {
    next();
  }
} );


export default router
