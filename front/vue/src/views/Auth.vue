<template>
  <v-content>
    <v-row>
      <v-col>
        <v-card width="400" class="mt-5 mx-auto">
          <v-card-title><h2>Create Account</h2></v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                type="text"
                label="email"
                prepend-icon="mdi-account-circle"
              />
              <v-text-field
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
            <v-btn color="success" class="mx-auto">SIGNUP</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return {
      showPassword: false
    };
  }
};
</script>
