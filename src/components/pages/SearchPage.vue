<template>
  <v-container>
    <v-row>
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <v-text-field
          v-model="keyword"
          label="本のタイトルを入力してください"
          required
        ></v-text-field>
        <v-btn
          class="main-image__btn"
          color="primary"
          v-on:click="handleSubmit"
        >
          検索
        </v-btn>
      </v-col>
      <v-col cols="3"></v-col>
      <v-col>
        <Lists :items="books" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import Lists from "../organisms/Lists";

export default {
  name: "SearchPage",
  components: {
    Lists,
  },
  data: () => ({
    keyword: "",
    books: [],
  }),
  methods: {
    handleSubmit() {
      const keyword = this.keyword;
      const applicationId = process.env.VUE_APP_RAKUTEN_KEY;
      const rakutenApi = `${process.env.VUE_APP_RAKUTEN_HOST}
                          ?format=json
                          &title=${keyword}
                          &applicationId=${applicationId}`;

      axios
        .get(rakutenApi)
        .then((res) => {
          const result = res.data;
          this.books = [];
          result.Items.map((book) => {
            this.books.push(book.Item);
          });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>
