<template>
  <v-card
    :color="item.color"
    dark
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title
          class="headline"
          v-text="item.title"
        ></v-card-title>

        <v-card-subtitle v-text="item.artist"></v-card-subtitle>
      </div>

      <v-avatar
        class="ma-3"
        size="75"
        tile
      >
        <v-img :src="item.src"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Lists",
  props: ['item'],
}
</script>