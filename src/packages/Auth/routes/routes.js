// const prefix = '/auth';

const AuthRoutes = [
  {
    path: "/login",
    name: "authLogin",

    meta: {
        unprotected:true,
        title:'Login'
    },
    component: () =>
      import(/* webpackChunkName: "autLogin" */ "../views/AuthLogin.vue"),
  },

  {
    path: "/test",
    name: "test",

    meta: {
        title:'Rota de teste'
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AuthLogin.vue"),
  },

];

// const AuthRoutes = Routers.map(route => ({
//   ...route,
//   path:`${prefix}/${route.path}`,
//   meta:route.meta,
// }));

export default AuthRoutes;