<template>
  <v-content>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-tabs v-model="tab">
          <v-tab key="1" :href="`#tab-1`">Login</v-tab>
          <v-tab key="2" :href="`#tab-2`">Signup</v-tab>
          <v-tab-item key="1" value="tab-1">
            <v-row class="py-7">
              <v-col><Login /> </v-col> </v-row
          ></v-tab-item>
          <v-tab-item key="2" value="tab-2">
            <v-row class="py-7">
              <v-col> <Signup /> </v-col> </v-row
          ></v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";
export default {
  name: "Auth",
  data() {
    return {
      tab: null
    };
  },
  components: {
    Login,
    Signup
  }
};
</script>
