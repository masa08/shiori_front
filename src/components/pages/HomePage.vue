<template>
  <div>
    <MainImage />
    <v-container>
      <div class="count-numbers">
        <span>{{ sentences[0].length }}件の文章が登録されています。</span>
      </div>
      <v-row>
        <v-col>
          <div class="">新着の文章</div>
          <v-container>
            <v-row dense>
              <v-col
                v-for="(sentence, i) in sentences[0]"
                :key="i"
                cols="12"
              >
                <v-card>
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="headline"
                        v-text="sentence.sentence"
                      ></v-card-title>
                      <v-card-subtitle v-text="sentence.book.title"></v-card-subtitle>
                      <v-card-actions>
                        <ShowSentence :item="sentence" />
                      </v-card-actions>
                    </div>

                    <v-avatar
                      class="ma-3"
                      size="75"
                      tile
                    >
                      <v-img :src="sentence.book.large_image_url"></v-img>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col>
          <div class="">人気の本</div>
          <Lists :items="books[0]" />
        </v-col>
        <!-- TODO: お気に入り実装後に実装 -->
        <!-- <v-col>
          <div class="">文章ランキング</div>
          <Lists :items="items" />
        </v-col>
        <v-col>
          <div class="">本ランキング</div>
          <Lists :items="items" />
        </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';
import MainImage from '../organisms/MainImage'
import Lists from '../organisms/Lists'
import ShowSentence from '../organisms/ShowSentence'
const bookUrl = "http://127.0.0.1:8000/api/book";
const sentenceUrl = "http://127.0.0.1:8000/api/sentence";

export default {
  name: 'HomePage',
  components: {
    MainImage,
    Lists,
    ShowSentence
  },
  data: () => ({
    books: [],
    sentences: [],
  }),
  mounted () {
    axios.get(bookUrl)
        .then((res) => {
          const result = camelcaseKeys(res.data.books)
          this.books.push(result);
        })
        .catch((err) => {
          alert(err);
        })

    axios.get(sentenceUrl)
        .then((res) => {
          const result = camelcaseKeys(res.data.sentences)
          this.sentences.push(result);
        })
        .catch((err) => {
          alert(err);
        })
  },
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