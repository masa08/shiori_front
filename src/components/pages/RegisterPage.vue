<template>
<v-container>
  <v-row>
    <v-col cols="2"></v-col>
    <v-col cols="8">
      <p>以下の項目を埋めて新規登録してください</p>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="name"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          required
        ></v-text-field>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          v-on:click="signUp"
        >
          新規登録
        </v-btn>
      </v-form>
    </v-col>
    <v-col cols="2"></v-col>
  </v-row>
</v-container>
</template>

<script>
  import axios from 'axios';

  export default {
    data: () => ({
      name: '',
      valid: true,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Name must be more than 6 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {
      signUp() {
        const name = this.name;
        const email = this.email;
        const password = this.password;
        const url = "http://127.0.0.1:8000/api/register";
        const params = new FormData();
        params.append('name', name);
        params.append('email', email);
        params.append('password', password);

        axios
          .post(url, params)
          .then((res) => {
            const token = res.data.token;
            const user = res.data.user;
            this.$store.commit('setToken', token);
            this.$store.commit('setUser', user);
          })
          .catch((err) => {
            alert(err);
          })
      }
    }
  }
</script>