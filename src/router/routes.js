import { watchAuthState, AUTH_STATE } from "src/backendAccess/authentication";

let authState = AUTH_STATE.LOGGED_OUT;
watchAuthState((user) => {
  authState = user ? AUTH_STATE.LOGGED : AUTH_STATE.LOGGED_OUT;
});

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "auth",
        component: () => import("pages/AuthenticationPage.vue"),
        beforeEnter: (to, from) => authState == AUTH_STATE.LOGGED_OUT,
      },
      {
        path: "logout",
        component: () => import("pages/LogoutPage.vue"),
        beforeEnter: (to, from) => authState == AUTH_STATE.LOGGED,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
