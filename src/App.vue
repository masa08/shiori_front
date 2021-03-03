<template>
  <v-app>
    <Header />
    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/commons/Header'
import Footer from './components/commons/Footer'
import firebase from 'firebase'
import config from './plugins/firebase'

firebase.initializeApp(config);

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data: () => ({}),
};
</script>
