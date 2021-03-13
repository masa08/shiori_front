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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getUserById } from '../../api/user';
import { getSentencesByUserId } from '../../api/sentence';
import ShowSentence from '../organisms/ShowSentence';

export default {
  name: 'UserPage',
  data: () => ({
    user: {},
    sentences: {},
  }),
  components: {
    ShowSentence,
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  async mounted() {
    try {
      const user = await getUserById(this.getUser.id);
      this.user = user;
    } catch (e) {
      alert(e);
    }

    try {
      const sentences = await getSentencesByUserId(this.getUser.id);
      this.sentences = sentences;
    } catch (e) {
      alert(e);
    }
  },
};
</script>
