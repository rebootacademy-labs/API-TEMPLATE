<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        My Auth App
      </v-toolbar-title>
      <v-spacer />
      <v-btn text rounded to="auth">LOGIN</v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
