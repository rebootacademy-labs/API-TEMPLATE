<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        My Auth App
      </v-toolbar-title>
      <v-spacer />
      <v-btn v-if="!name" text rounded to="auth">LOGIN</v-btn>
      <span v-else>
        Hi {{ name }}!
        <v-btn text rounded @click="logout">LOGOUT</v-btn>
      </span>
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
      name: "",
      email: ""
    };
  },
  created() {
    this.name = localStorage.getItem("name");
    this.email = localStorage.getItem("email");
  },
  mounted() {
    this.$root.$on("updateUser", () => {
      this.name = localStorage.getItem("name");
      this.email = localStorage.getItem("email");
    });
  },
  methods: {
    logout() {
      this.name = null;
      localStorage.removeItem("name");
      this.email = null;
      localStorage.removeItem("email");
      this.token = null;
      localStorage.removeItem("token");
      this.$router.push("auth");
    }
  }
};
</script>
