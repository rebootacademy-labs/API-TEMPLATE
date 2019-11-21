<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        My Auth App
      </v-toolbar-title>
      <v-spacer />
      <v-btn v-if="!name" text rounded to="auth">LOGIN</v-btn>
      <span v-else>Hi {{ name }}!</span>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: null,
      email: null
    };
  },
  mounted() {
    this.$root.$on("updateUser", (name, email) => {
      this.name = name;
      this.email = email;
    });
  }
};
</script>
