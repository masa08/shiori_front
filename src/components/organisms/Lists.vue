<template>
  <v-container>
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="12">
        <List :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import List from "../molecules/List";

export default {
  name: "Lists",
  components: {
    List,
  },
  props: ["items"],
};
</script>
