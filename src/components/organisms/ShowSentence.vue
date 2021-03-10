<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="800">
      <template v-slot:activator="{ on }">
        <v-btn color="#18bc9c" dark v-on="on"> もっとみる </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          {{ item.sentence }}
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="1"></v-col>
              <v-col cols="10">
                <v-img :src="item.book.large_image_url" width="100%"></v-img>
                <h3>文章</h3>
                <p>{{ item.sentence }}</p>
                <h3>タイトル</h3>
                <p>{{ item.book.title }}</p>
                <h3>著者</h3>
                <p>{{ item.book.author }}</p>
                <h3>出版社</h3>
                <p>{{ item.book.publisher_name }}</p>
                <h3>詳細</h3>
                <p>{{ item.book.item_caption }}</p>
                <h3>発売日</h3>
                <p>{{ item.book.sales_date }}</p>
              </v-col>
              <v-col cols="1"></v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'ShowSentence',
  data: () => ({
    dialog: false,
  }),
  props: ['item'],
};
</script>
