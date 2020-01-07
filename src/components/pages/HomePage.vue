<template>
  <div>
    <MainImage />
    <div class="count-numbers">
      <p>000,000,000件の文章</p>
    </div>
    <v-container>
      <v-row>
        <v-col>
          <div class="">新着の文章</div>
        </v-col>
        <v-col>
          <div class="">文章ランキング</div>
        </v-col>
        <v-col>
          <div class="">本ランキング</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MainImage from '../organisms/MainImage'

export default {
  name: 'HomePage',
  components: {
    MainImage,
  },
  data: () => ({
  }),
};
</script>

<style>
  .count-numbers {
    text-align: center;
  }
</style>