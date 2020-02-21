<template>
  <v-app-bar
    app
    color="#fff"
  >
    <div class="d-flex align-center">
      <h1><router-link to="/" style="color:#18bc9c;">SHIORI</router-link></h1>
    </div>

    <v-spacer></v-spacer>
    <div class="login" v-if="this.$store.state.token">
      <router-link to="/search">
        <v-btn
          target="_blank"
          text
        >
          <span class="mr-2">本を検索</span>
        </v-btn>
      </router-link>
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
      window.location.href = process.env.VUE_APP_FRONT
      // const url = process.env.VUE_APP_HOST + "/api/logout";
      // const token = this.$store.state.token;
      // const params = new FormData();
      // params.append('token', token);

      // axios.post(url, params)
      //     .then((res) => {
      //       alert(JSON.stringify(res.data));
      //       this.$store.commit('deleteToken');
      //     })
      //     .catch((err) => {
      //       alert(err);
      //     });
    },
  }
}
</script>