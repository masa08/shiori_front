<template>
  <v-app-bar
    app
    color="#fff"
  >
    <div class="d-flex align-center">
      <h1>SHIORI</h1>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      target="_blank"
      text
    >
      <span class="mr-2">ログイン</span>
    </v-btn>
    <v-btn
      target="_blank"
      text
    >
      <span class="mr-2">新規登録</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',

  data: () => ({

  }),
}
</script>