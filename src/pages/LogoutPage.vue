<template>
  <q-page class="flex flex-center">
    <q-spinner v-if="!loggedOut" />
    <div v-else>Vous avez été déconnecté</div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { logout, createErrorMessage } from "src/backendAccess/authentication";

export default defineComponent({
  name: "LogoutPage",

  setup() {
    const loggedOut = ref(false);
    return { loggedOut };
  },

  async mounted() {
    try {
      await logout();
      this.loggedOut = true;
      setTimeout(() => this.$router.push("/"), 5000);
    } catch {
      console.log(error);
    }
  },
});
</script>
