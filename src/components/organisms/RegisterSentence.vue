<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="800">
      <template v-slot:activator="{ on }">
        <v-btn color="#18bc9c" dark v-on="on"> 新規登録 </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          {{ item.title }}
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="1"></v-col>
              <v-col cols="5">
                <v-img :src="item.largeImageUrl" width="100%"></v-img>
              </v-col>
              <v-col cols="5">
                <h3>タイトル</h3>
                <p>{{ item.title }}</p>
                <h3>著者</h3>
                <p>{{ item.author }}</p>
                <h3>出版社</h3>
                <p>{{ item.publisherName }}</p>
                <h3>詳細</h3>
                <p>{{ item.itemCaption }}</p>
                <h3>発売日</h3>
                <p>{{ item.salesDate }}</p>
                <!-- {{ item }} -->
              </v-col>
              <v-col cols="1"></v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-text>
          <p>登録したい文章を記入してください。</p>
          <v-text-field v-model="sentence" label="文章" required></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="handleSubmit"> 新規登録 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterSentence",
  data: () => ({
    sentence: "",
    dialog: false,
  }),
  props: ["item"],
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    handleSubmit() {
      const url = process.env.VUE_APP_HOST + "/api/sentence";
      const params = new FormData();
      const user = this.user[0];
      params.append("user_id", user.id);
      params.append("title", this.item.title);
      params.append("isbn", this.item.isbn);
      params.append("author", this.item.author);
      params.append("publisherName", this.item.publisherName);
      params.append("itemCaption", this.item.itemCaption);
      params.append("salesDate", this.item.salesDate);
      params.append("largeImageUrl", this.item.largeImageUrl);
      params.append("sentence", this.sentence);
      axios
        .post(url, params)
        .then(() => {
          alert("文章の登録に成功しました。マイページに遷移します。");
          this.dialog = false;
          window.location.href = process.env.VUE_APP_FRONT + "/user/" + user.id;
        })
        .catch(() => {
          alert("必要項目を全て埋めてください。");
        });
    },
  },
};
</script>
