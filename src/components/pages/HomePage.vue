<template>
  <div>
    <MainImage />
    <v-container>
      <div class="count-numbers">
        <span>{{ sentences.length }}件の文章が登録されています。</span>
      </div>
      <div v-if="this.$store.state.token">
        <v-row>
          <v-col>
            <div class="">新着の文章</div>
            <v-container>
              <v-row dense>
                <v-col v-for="(sentence, i) in sentences" :key="i" cols="12">
                  <v-card>
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-card-title
                          class="headline"
                          v-text="sentence.sentence"
                        ></v-card-title>
                        <v-card-subtitle
                          v-text="sentence.book.title"
                        ></v-card-subtitle>
                        <v-card-actions>
                          <ShowSentence :item="sentence" />
                        </v-card-actions>
                      </div>
                      <v-avatar class="ma-3" size="75" tile>
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
            <Lists :items="books" />
          </v-col>
        </v-row>
      </div>
      <div v-else>
        <v-row>
          <v-col cols="12">
            <h2>SHIORIとは</h2>
            <p>
              SHIORIとは、文章ベースで読書記録をすることができる、新感覚の読書記録サービスです。
            </p>
          </v-col>
          <v-col>
            <h2>SHIORIの楽しみ方</h2>
            <v-row>
              <v-col lg="4" sm="12">
                <v-card class="mx-auto" max-width="400">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  >
                    <v-card-title>文章を登録する</v-card-title>
                  </v-img>
                  <v-card-text class="text--primary">
                    <div>本を読んでいて、心に響いた文章を登録しよう！</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col lg="4" sm="12">
                <v-card class="mx-auto" max-width="400">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://images.unsplash.com/photo-1551643556-0e32e30fc8e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  >
                    <v-card-title
                      >お気に入りの文章を保存する(開発中)</v-card-title
                    >
                  </v-img>
                  <v-card-text class="text--primary">
                    <div>他のユーザーの心に響いた文章をお気に入りしよう！</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col lg="4" sm="12">
                <v-card class="mx-auto" max-width="400">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://images.unsplash.com/photo-1531537571171-a707bf2683da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                  >
                    <v-card-title>文章について議論する(開発中)</v-card-title>
                  </v-img>
                  <v-card-text class="text--primary">
                    <div>ユーザー同士で登録した文章について議論しよう！</div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import camelcaseKeys from "camelcase-keys";
import MainImage from "../organisms/MainImage";
import Lists from "../organisms/Lists";
import ShowSentence from "../organisms/ShowSentence";
const bookUrl = process.env.VUE_APP_HOST + "/api/book";
const sentenceUrl = process.env.VUE_APP_HOST + "/api/sentence";

export default {
  name: "HomePage",
  components: {
    MainImage,
    Lists,
    ShowSentence,
  },
  data: () => ({
    books: [],
    sentences: [],
  }),
  mounted() {
    axios
      .get(bookUrl)
      .then((res) => {
        const result = camelcaseKeys(res.data.books);
        this.books = result;
      })
      .catch((err) => {
        alert(err);
      });

    axios
      .get(sentenceUrl)
      .then((res) => {
        const result = camelcaseKeys(res.data.sentences);
        this.sentences = result;
      })
      .catch((err) => {
        alert(err);
      });
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
