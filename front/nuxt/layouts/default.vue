<template>
  <v-app>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-toolbar-title v-text="userName" />
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer fixed app class="text-center">
      <v-row align="center" justify="center">
        <span>&copy; 2019 - {{ title }}</span>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "Reboot Final Project"
    };
  },
  computed: {
    ...mapGetters(["userName"])
  }
};
</script>
