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

<script lang="ts">
import { getBookFromRakuten } from '../../api/rakuten';
import Lists from '../organisms/Lists';

export default {
  name: 'SearchPage',
  components: {
    Lists,
  },
  data: () => ({
    keyword: '',
    books: [],
  }),
  methods: {
    async handleSubmit(): void {
      if (this.keyword == '') {
        alert('検索ワードを入力してください。');
        return;
      }

      try {
        this.books = [];
        const books = await getBookFromRakuten(this.keyword);
        books.Items.map((book) => {
          this.books.push(book.Item);
        });
      } catch (e) {
        alert(e);
      }
    },
  },
};
</script>
