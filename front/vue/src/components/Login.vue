<template>
  <v-card width="400" class="mt-5 mx-auto">
    <v-card-title><h2>Login</h2></v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="email"
          type="text"
          label="Email"
          prepend-icon="mdi-email"
        />
        <v-text-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-icon="mdi-lock"
          append-icon="mdi-eye-off"
          @click:append="showPassword = !showPassword"
        />
      </v-form>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-btn color="success" class="mx-auto">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      showPassword: false,
      email: "",
      password: ""
    };
  }
};
</script>
