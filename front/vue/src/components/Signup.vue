<template>
  <v-card width="400" class="mx-auto">
    <v-card-title><h2>Signup</h2></v-card-title>
    <v-card-text>
      <v-form v-model="validForm" ref="form">
        <v-text-field
          v-model="name"
          type="text"
          label="Name"
          prepend-icon="mdi-account-circle"
          :rules="[rules.required]"
        />
        <v-text-field
          v-model="email"
          type="text"
          label="Email"
          prepend-icon="mdi-email"
          :rules="[rules.required, rules.email]"
          required
        />
        <v-text-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-icon="mdi-lock"
          append-icon="mdi-eye-off"
          :rules="[rules.required, rules.password]"
          @click:append="showPassword = !showPassword"
          required
        />
        <v-text-field
          v-model="password_repeat"
          :type="showPassword ? 'text' : 'password'"
          label="Confirm Password"
          prepend-icon="mdi-lock-circle"
          :rules="[rules.required, rules.password_repeat]"
          required
        />
      </v-form>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-btn color="success" class="mx-auto" @click="signup">SIGNUP</v-btn>
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
  name: "signup",
  data() {
    return {
      showPassword: false,
      name: "",
      email: "",
      password: "",
      password_repeat: "",
      snackbar: false,
      snackbar_msg: "",
      validForm: true,
      rules: {
        required: value => !!value || "Required.",
        password: value => value.length >= 4 || "Min 4 characters",
        password_repeat: value =>
          value == this.password || "Passwords should match",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    };
  },
  methods: {
    signup() {
      if (this.$refs.form.validate()) {
        authApi.signup(this.name, this.email, this.password).then(response => {
          if (response.data && response.data.error) {
            if (response.data.error.errmsg) {
              this.snackbar_msg = "User Alredy Registered. Login?";
            } else {
              // Show validations to user
              debugger;
              this.snackbar_msg = response.data.error.message;
            }
          } else {
            this.snackbar_msg = "User Successfully Registered!";
            this.$root.$emit("updateUser", this.name, this.email);
            this.$router.push("home");
          }
          this.snackbar = true;
        });
      }
    }
  }
};
</script>
