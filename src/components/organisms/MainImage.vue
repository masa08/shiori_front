<template>
  <div class="main-image">
    <v-container>
        <v-row>
          <v-col class="main-image__left" cols="12">
            <div class="main-image__message">
              <h2>SHIORI</h2>
              <p>心に響く文章と出会う場所</p>
            </div>
          </v-col>
        </v-row>
      <div v-if="this.$store.state.token"></div>
      <div v-else>
        <v-row>
          <v-col class="main-image__right" cols="6">
            <div class="main-image__register">
              <h2>新規登録</h2>
              <router-link to="/register">
                <Button class="main-image__btn" title="新規登録" btnColor="success" />
              </router-link>
            </div>
          </v-col>
          <v-col class="main-image__right" cols="6">
            <div class="main-image__login">
              <h2>ログイン</h2>
              <router-link to="/login">
                <Button class="main-image__btn" title="ログイン" btnColor="" />
              </router-link>
            </div>
          </v-col>
        </v-row>
      </div>
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
    background-image: url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1441&q=80');
    background-size: cover;
  }

  .main-image__message {
    color: #fff;
    position: absolute;
    left: 10%;
    top: 40%;
  }

  .main-image__register {
    margin-bottom: 20px;
  }

  .main-image__btn {
    width: 100%;
    margin: 5px;
  }
</style>