<template>
  <div class="column">
    <div style="height: 20px; color: red">{{ errorMessage }}</div>
    <q-input type="email" v-model="email" label="e-mail" />
    <q-input type="password" v-model="password" label="mot de passe" />
    <q-input
      type="password"
      v-model="checkPassword"
      label="répétez votre mot de passe"
    />
    <div style="height: 20px" />
    <q-btn
      @click="submit"
      :loading="awaitingForData"
      :disable="isButtonDisabled"
      label="Créer un compte"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { signup, createErrorMessage } from "src/backendAccess/authentication";

export default defineComponent({
  name: "SignupForm",

  data() {
    return {
      email: "",
      password: "",
      checkPassword: "",
      awaitingForData: false,
      errorMessage: "",
    };
  },

  computed: {
    isEmailValid() {
      return this.email != "";
    },
    isPasswordValid() {
      return this.password != "" && this.password == this.checkPassword;
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
        const response = await signup(this.email, this.password);
        this.awaitingForData = false;
      } catch (error) {
        this.errorMessage = createErrorMessage(error);
        this.awaitingForData = false;
      }
    },
  },
});
</script>
