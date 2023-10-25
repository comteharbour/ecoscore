<template>
  <q-page class="flex flex-center"> Login </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default defineComponent({
  name: "LoginPage",

  created() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, "a@a.abc", "123456")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
});
</script>
