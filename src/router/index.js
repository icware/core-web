import { createRouter, createWebHistory } from 'vue-router'
import AuthRoutes from '@/packages/Auth/routes/routes'
import HomeView from '../views/HomeView.vue'
import  useModelAuth  from '@/models/Auth';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      unprotected:true,
      title:'Tela inicial'
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
