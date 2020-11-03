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

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data: () => ({}),
};
</script>
