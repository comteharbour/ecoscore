<template>
  <q-page class="flex flex-center">
    <div class="column">
      <div class="text-h5">{{ title }}</div>
      <q-btn
        @click="switchMode"
        icon="sync_alt"
        :label="otherMode"
        no-caps
        flat
      />
      <LoginForm v-if="login" />
      <div v-else>signup</div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import LoginForm from "components/authentication/loginForm.vue";

const MODE = { LOGIN: true, SINGUP: false };

export default defineComponent({
  name: "AuthenticationPage",

  components: {
    LoginForm,
  },

  data() {
    return {
      mode: MODE.LOGIN,
    };
  },

  computed: {
    title() {
      return this.createText(this.mode);
    },
    otherMode() {
      return this.createText(!this.mode);
    },
    login() {
      return this.mode == MODE.LOGIN;
    },
  },

  methods: {
    switchMode() {
      this.mode = !this.mode;
    },

    createText(modeCode) {
      switch (modeCode) {
        case MODE.LOGIN:
          return "Se connecter avec son compte";
        case MODE.SINGUP:
          return "Créer un nouveau compte";
        default:
          return "erreur d'mode";
      }
    },
  },
});
</script>
