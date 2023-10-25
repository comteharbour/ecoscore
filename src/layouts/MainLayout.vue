<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <BurgerMenuLink
          v-for="link in burgerMenuLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import BurgerMenuLink from "components/BurgerMenuLink.vue";

const linksList = [
  {
    title: "Home",
    caption: "aqap-ecoscore",
    icon: "home",
    route: "/",
  },
  {
    title: "Se connecter",
    caption: "créer ou utiliser un compte",
    icon: "account_circle",
    route: "/login",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    BurgerMenuLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      burgerMenuLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
