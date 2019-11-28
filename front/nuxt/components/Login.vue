<template>
  <div>
    <v-row>
      <v-col cols="4" offset-md="1">
        <v-form ref="form" lazy-validation>
          <v-card>
            <v-card-title><h2>Login</h2></v-card-title>
            <v-card-text>
              <v-text-field
                v-model="email"
                label="E-mail"
                :rules="[rules.required, rules.email]"
                validate-on-blur
              />

              <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                :rules="[rules.required]"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                label="Password"
                @click:append="showPassword = !showPassword"
              />
            </v-card-text>
            <v-card-actions>
              <v-btn color="success" class="mr-4" @click="login">
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      rules: {
        required: v => !!v || "Item is required",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || "Invalid e-mail."
        }
      }
    }
  }
}
</script>

<style scoped></style>
