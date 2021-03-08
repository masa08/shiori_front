<template>
  <v-btn :color="btnColor">
    {{ title }}
  </v-btn>
</template>

<script>
export default {
  name: "Button",
  props: ["title", "btnColor"],
};
</script>
