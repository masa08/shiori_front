<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>マイページ</h1>
        <p>名前: {{ user.name }}</p>
        <h2>投稿一覧</h2>
        <v-col>
          <div class="">新着の文章</div>
          <v-container>
            <v-row dense>
              <v-col
                v-for="(sentence, i) in sentences"
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';
import ShowSentence from '../organisms/ShowSentence'

export default {
  name: 'UserPage',
  data: () => ({
    user: {},
    sentences: {},
  }),
  components: {
    ShowSentence
  },
  computed: {
      getUser() {
        return this.$store.getters.getUser
      }
    },
  mounted () {
      const user_id = this.getUser[0].id;
      const url = process.env.VUE_APP_HOST + `/api/users/${user_id}`;
      axios.get(url)
        .then((res) => {
          const result = camelcaseKeys(res.data.user)
          this.user = result;
        })
        .catch((err) => {
          alert(err);
        });

        const sentenceUrl = process.env.VUE_APP_HOST + `/api/sentence?user_id=${user_id}`;

        axios.get(sentenceUrl)
        .then((res) => {
          const result = camelcaseKeys(res.data.sentences)
          this.sentences = result;
        })
        .catch((err) => {
          alert(err);
        })
    }
}
</script>