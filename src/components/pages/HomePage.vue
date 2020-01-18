<template>
  <div>
    <MainImage />
    <v-container>
      <div class="count-numbers">
        <span>000,000,000件の文章</span>
      </div>
      <v-row>
        <v-col>
          <div class="">新着の文章</div>
          <Lists :items="items" />
        </v-col>
        <v-col>
          <div class="">文章ランキング</div>
          <Lists :items="items" />
        </v-col>
        <v-col>
          <div class="">本ランキング</div>
          <Lists :items="items" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MainImage from '../organisms/MainImage'
import Lists from '../organisms/Lists'

export default {
  name: 'HomePage',
  components: {
    MainImage,
    Lists
  },
  data: () => ({
    items: [
      {
        color: '#1F7087',
        mediumImageUrl: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        author: 'Foster the People',
      },
      {
        color: '#952175',
        mediumImageUrl: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        author: 'Ellie Goulding',
      },
      {
        color: '#385F73',
        mediumImageUrl: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        author: 'Ellie Goulding',
      },
    ],
  }),
};
</script>

<style>
  .count-numbers {
    text-align: center;
    background-color: #18bc9c;
    color: #fff;
    padding: 20px;
    margin-bottom: 20px;

  }
</style>