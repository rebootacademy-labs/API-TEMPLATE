<template>
  <v-card width="400" class="mt-5 mx-auto">
    <v-card-title><h2>Signup</h2></v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="name"
          type="text"
          label="Name"
          prepend-icon="mdi-account-circle"
        />
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
          :rules="[rules.required, rules.password]"
          @click:append="showPassword = !showPassword"
        />
        <v-text-field
          v-model="password_repeat"
          :type="showPassword ? 'text' : 'password'"
          label="Confirm Password"
          prepend-icon="mdi-lock-circle"
          :rules="[rules.required, rules.password_repeat]"
        />
      </v-form>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-btn color="success" class="mx-auto">SIGNUP</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      showPassword: false,
      name: "",
      email: "",
      password: "",
      password_repeat: "",

      rules: {
        required: value => !!value || "Required.",
        password: value => value.length > 8 || "Min 8 characters",
        password_repeat: value =>
          value == this.password || "Passwords should match",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    };
  }
};
</script>
