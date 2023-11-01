<template>
  <div class="column">
    <div style="height: 20px; color: red">{{ errorMessage }}</div>
    <q-input type="email" v-model="email" label="e-mail" />
    <q-input type="password" v-model="password" label="mot de passe" />
    <div style="height: 20px" />
    <q-btn
      @click="submit"
      :loading="awaitingForData"
      :disable="isButtonDisabled"
      label="Se connecter"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { login, createErrorMessage } from "src/backendAccess/authentication";

export default defineComponent({
  name: "LoginForm",

  data() {
    return {
      email: "",
      password: "",
      awaitingForData: false,
      errorMessage: "",
    };
  },

  computed: {
    isEmailValid() {
      return this.email != "";
    },
    isPasswordValid() {
      return this.password != "";
    },
    isButtonDisabled() {
      return (
        !this.isEmailValid || !this.isPasswordValid || this.awaitingForData
      );
    },
  },

  methods: {
    async submit() {
      this.errorMessage = "";
      this.awaitingForData = true;
      try {
        const response = await login(this.email, this.password);
        this.awaitingForData = false;
      } catch (error) {
        this.errorMessage = createErrorMessage(error);
        this.awaitingForData = false;
      }
    },
  },
});
</script>
