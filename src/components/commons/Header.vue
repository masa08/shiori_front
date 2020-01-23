<template>
  <v-app-bar
    app
    color="#fff"
  >
    <div class="d-flex align-center">
      <h1><router-link to="/">SHIORI</router-link></h1>
    </div>

    <v-spacer></v-spacer>
    <div class="login" v-if="this.$store.state.token">
      <router-link to="/search">
        <v-btn
          target="_blank"
          text
        >
          <span class="mr-2">検索</span>
        </v-btn>
      </router-link>
      <!-- TODO: userのidをstoreに保存する -->
      <router-link to="/user/2">
        <v-btn
          target="_blank"
          text
        >
          <span class="mr-2">マイページ</span>
        </v-btn>
      </router-link>
      <v-btn
        target="_blank"
        text
        v-on:click="logout"
      >
        <span class="mr-2">ログアウト</span>
      </v-btn>
    </div>
    <div v-else>
      <router-link to="/login">
        <v-btn
          target="_blank"
          text
        >
          <span class="mr-2">ログイン</span>
        </v-btn>
      </router-link>
      <router-link to="/register">
        <v-btn
          target="_blank"
          text
        >
          <span class="mr-2">新規登録</span>
        </v-btn>
      </router-link>
    </div>
  </v-app-bar>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'Header',

  data: () => ({

  }),
  methods: {
    logout() {
      this.$store.commit('deleteToken');
      // TODO: LOGOUTの実装
    //   const url = "http://127.0.0.1:8000/api/logout";
    //   const token = this.$store.state.token;
    //   const params = new FormData();
    //   params.append('token', token);

    //   axios.get(url, params)
    //       .then((res) => {
    //         alert(res)
    //       })
    //       .catch((err) => {
    //         alert(err);
    //       });
    },
  }
}
</script>