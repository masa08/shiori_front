<template>
  <div class="main-image">
    <v-container>
      <v-row>
        <v-col class="main-image__left" cols="8">
          <div class="main-image__message">
            <h2>心に響く文章と出会う</h2>
          </div>
        </v-col>
        <v-col class="main-image__right" cols="4">
          <h2>新規登録</h2>
          <Button class="main-image__btn" title="メールアドレスで登録" btnColor="success" />
          <Button class="main-image__btn" title="Twitterで登録" btnColor="primary" />
          <h3>ログイン</h3>
          <Button class="main-image__btn" title="ログインはこちら" btnColor="" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Button from '../atoms/Button'

export default {
  name: 'MainImage',
  components: {
    Button,
  },
  data: () => ({

  })
}
</script>

<style>
  .main-image {
    display: block;
    content: "";
    clear: both;
  }

  .main-image__left {
    position: relative;
    height: 300px;
    background-color: #18bc9c;
  }

  .main-image__message {
    position: absolute;
    top: 40%;
  }

  .main-image__btn {
    margin: 5px 0px;
  }
</style>