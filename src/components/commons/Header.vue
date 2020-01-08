<template>
  <v-app-bar
    app
    color="#fff"
  >
    <div class="d-flex align-center">
      <h1><router-link to="/">SHIORI</router-link></h1>
    </div>

    <v-spacer></v-spacer>
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
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',

  data: () => ({

  }),
}
</script>