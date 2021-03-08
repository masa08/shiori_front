<template>
  <v-card>
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="headline" v-text="item.title"></v-card-title>
        <v-card-subtitle v-text="item.author"></v-card-subtitle>
        <v-card-actions>
          <RegisterSentence :item="item" />
        </v-card-actions>
      </div>
      <v-avatar class="ma-3" size="75" tile>
        <v-img :src="item.largeImageUrl"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
import RegisterSentence from "../organisms/RegisterSentence";

export default {
  name: "Lists",
  components: {
    RegisterSentence,
  },
  props: ["item"],
};
</script>
