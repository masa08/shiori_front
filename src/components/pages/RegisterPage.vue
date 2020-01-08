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
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Password"
          required
        ></v-text-field>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
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
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),
  }
</script>