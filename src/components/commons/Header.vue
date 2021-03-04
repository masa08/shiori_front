<template>
  <v-card
    class="mx-auto overflow-hidden"
    height="100%"
    width="100%"
  >
    <v-app-bar app color="#fff">
      <div class="d-flex align-center">
        <h1><router-link to="/" style="color:#18bc9c;">SHIORI</router-link></h1>
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group v-model="group" v-if="this.$store.state.token">
          <v-list-item>
            <v-list-item-title>
              <router-link to="/search">
                <v-btn target="_blank" text>
                  <span class="mr-2">本を検索</span>
                </v-btn>
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <router-link to="/user/2">
                <v-btn target="_blank" text>
                  <span class="mr-2">マイページ</span>
                </v-btn>
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn target="_blank" text v-on:click="logout">
                <span class="mr-2">ログアウト</span>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group v-model="group" v-else>
          <v-list-item>
            <v-list-item-title>
              <router-link to="/login">
                <v-btn target="_blank" text>
                  <span class="mr-2">ログイン</span>
                </v-btn>
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <router-link to="/register">
                <v-btn target="_blank" text>
                  <span class="mr-2">新規登録</span>
                </v-btn>
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </v-card>
</template>

<script>
import firebase from 'firebase';
import Footer from './Footer'

export default {
  name: 'Header',
  components: {
    // Header,
    Footer,
  },

  data: () => ({
    drawer: false,
    group: null,
  }),
  watch: {
    group () {
      this.drawer = false
    },
  },
  methods: {
    async logout() {
      await firebase.auth().signOut();
      this.$store.commit('deleteToken');
      window.location.href = process.env.VUE_APP_FRONT
    },
  }
}
</script>