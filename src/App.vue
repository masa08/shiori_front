<template>
  <v-app>
    <v-card class="mx-auto overflow-hidden" height="100%" width="100%">
      <Header />
      <v-content>
        <router-view />
      </v-content>
      <Footer />
    </v-card>
  </v-app>
</template>

<script>
import Header from "./components/commons/Header";
import Footer from "./components/commons/Footer";
import firebase from "firebase";
import config from "./plugins/firebase";

firebase.initializeApp(config);

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
