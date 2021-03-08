<template>
  <v-container>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <p>以下の項目を埋めてログインしてください</p>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            v-on:click="handleSubmit"
          >
            ログイン
          </v-btn>
        </v-form>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";
import axios from "axios";

export default {
  data: () => ({
    valid: true,
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 6) || "Name must be more than 6 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {
    async handleSubmit() {
      const url = process.env.VUE_APP_HOST + "/api/login";
      const params = new FormData();
      params.append("email", this.email);
      params.append("password", this.password);

      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password);
      const token = await result.user.getIdToken();
      this.$store.commit("setToken", token);

      const res = await axios.post(url, params);
      this.$store.commit("setUser", res.data.user);

      window.location.href = process.env.VUE_APP_FRONT;
    },
  },
};
</script>
