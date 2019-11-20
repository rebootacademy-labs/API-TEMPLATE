<template>
  <v-content>
    <v-row>
      <v-col> <Login /> </v-col>
    </v-row>
    <v-row>
      <v-col> <Signup /> </v-col>
    </v-row>
  </v-content>
</template>

<script>
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";
export default {
  name: "Auth",

  components: {
    Login,
    Signup
  }
};
</script>
