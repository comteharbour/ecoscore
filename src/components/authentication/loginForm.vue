<template>
  <div class="column">
    <div style="height: 20px">{{ errorMessage }}</div>
    <q-input type="email" v-model="email" />
    <q-input type="password" v-model="password" />
    <q-btn
      @click="submit"
      :loading="awaitingForData"
      :disable="isButtonDisabled"
      >Se connecter</q-btn
    >
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { signin, createErrorMessage } from "./authentication";

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
        const response = await signin(this.email, this.password);
        console.log(response);
        this.awaitingForData = false;
      } catch (error) {
        console.log(error.code);
        this.errorMessage = createErrorMessage(error);
        this.awaitingForData = false;
      }
    },
  },
});
</script>
