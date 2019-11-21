<template>
  <div class="home">
    <v-row>
      <v-col cols="4" offset-md="1">
        <h1>Login</h1>
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="user.email"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="user.password"
            :rules="[v => !!v || 'Item is required']"
            label="Password"
            required
          ></v-text-field>

          <v-btn color="success" class="mr-4" @click="login">
            Login
          </v-btn>
        </v-form>
      </v-col>
      <v-col cols="4" offset-md="1">
        <h1>Sigup</h1>
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="user.name"
            :rules="[v => !!v || 'Item is required']"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="user.email"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="user.password"
            :rules="[v => !!v || 'Item is required']"
            label="Password"
            required
          ></v-text-field>

          <v-btn @click="signup" color="success" class="mr-4">
            Sign Up
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import apiService from "@/services/auth.service.js";

export default {
  name: "home",
  data() {
    return {
      user: {
        email: "",
        password: "",
        name: ""
      },
      password_repite: ""
    };
  },
  methods: {
    login() {
      apiService
        .login({
          email: this.user.email,
          password: this.user.password
        })
        .then(this.$router.push("/about"));
    },
    signup() {
      apiService
        .signup({
          email: this.user.email,
          password: this.user.password,
          username: this.user.name
        })
        .then(this.$router.push("/about"));
    }
  }
};
</script>
