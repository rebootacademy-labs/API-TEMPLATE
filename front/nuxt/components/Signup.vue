<template>
  <div>
    <v-row>
      <v-col cols="10" offset-md="1">
        <v-form ref="form" lazy-validation>
          <v-card>
            <v-card-title>
              <h2>Sign Up</h2>
            </v-card-title>
            <v-card-text>
              <v-text-field
                v-model="name"
                label="Name"
                :rules="[rules.required]"
                validate-on-blur
              />

              <v-text-field
                v-model="email"
                label="E-mail"
                :rules="[rules.required, rules.email]"
                validate-on-blur
              />

              <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                :rules="[rules.required, rules.password]"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                label="Password"
                @click:append="showPassword = !showPassword"
              />
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="success" class="mr-4" @click="signup"
                >Sign Up</v-btn
              >
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
      email: "maria@gmail.com",
      password: "123456",
      name: "Maria",
      showPassword: false,
      rules: {
        required: v => !!v || "Item is required",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
        password: v => v.length > 5 || "Password too short!"
      }
    };
  },
  methods: {
    async signup() {
      const user = {
        user_name: this.name,
        user_email: this.email,
        user_password: this.password
      };

      const newToken = await this.$axios.$post("auth/signup", user);
      this.$store.commit("saveToken", newToken);
      this.$router.push("/");
    }
  }
};
</script>

<style scoped></style>
