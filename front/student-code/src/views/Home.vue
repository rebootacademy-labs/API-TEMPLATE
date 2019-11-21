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
// @ is an alias to /src
import axios from "axios";

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
      console.log(this.user.email, this.user.password);
      axios
        .post("http://localhost:2222/api/auth/login", {
          user_email: this.user.email,
          user_password: this.user.password
        })
        .then(res => res.data)
        .then(data => {
          const user = {
            token: data.token,
            email: data.email,
            name: data.username
          };
          localStorage.setItem("reboot-user", JSON.stringify(user));
          this.$router.push("/about");
        });
    },
    signup() {
      console.log(this.user.email, this.user.password);

      axios
        .post("http://localhost:2222/api/auth/signup", {
          user_email: this.user.email,
          user_password: this.user.password,
          user_name: this.user.name
        })
        .then(res => res.data)
        .then(data => {
          const user = {
            token: data.token,
            email: data.email,
            name: data.username
          };
          localStorage.setItem("reboot-user", JSON.stringify(user));
          this.$router.push("/about");
        });
    }
  }
};
</script>
