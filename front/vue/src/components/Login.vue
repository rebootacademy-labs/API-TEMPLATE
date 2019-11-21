<template>
  <v-card width="400" class="mx-auto">
    <v-card-title><h2>Login</h2></v-card-title>
    <v-card-text>
      <v-form v-model="validForm" ref="form">
        <v-text-field
          v-model="email"
          type="text"
          label="Email"
          prepend-icon="mdi-email"
          :rules="[rules.required, rules.email]"
        />
        <v-text-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-icon="mdi-lock"
          append-icon="mdi-eye-off"
          :rules="[rules.required]"
          @click:append="showPassword = !showPassword"
        />
      </v-form>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-btn color="success" class="mx-auto" @click="login">Login</v-btn>
    </v-card-actions>
    <v-snackbar v-model="snackbar" top right>
      {{ snackbar_msg }}
      <v-btn color="red" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
import authApi from "@/services/authService.js";

export default {
  name: "login",
  data() {
    return {
      showPassword: false,
      email: "",
      password: "",
      snackbar: false,
      snackbar_msg: "",
      validForm: true,
      rules: {
        required: value => !!value || "Required.",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    };
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        authApi.login(this.email, this.password).then(response => {
          debugger;
          if (response.error) {
            this.snackbar_msg = response.error;
          } else {
            this.snackbar_msg = "Login Successful!";
            this.$root.$emit("updateUser");
            this.$router.push("home");
          }
          this.snackbar = true;
        });
      }
    }
  }
};
</script>
