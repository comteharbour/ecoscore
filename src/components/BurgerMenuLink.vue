<template>
  <q-item clickable tag="a" target="_blank" @click="go">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    route: {
      type: String,
      default: "/",
    },

    icon: {
      type: String,
      default: "",
    },
  },
  methods: {
    go: function () {
      this.$router.push(this.route);
    },
  },
});
</script>
