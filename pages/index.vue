<template>
<v-app id="app">
  <v-toolbar height="55px">
    <v-layout align-center>
      <v-toolbar-title>
        TEST
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="isLogin" color="success" @click="login" style="height: 36px; width: 102px;">ログアウト</v-btn>
      <v-btn v-else color="success" @click="login" style="height: 36px; width: 102px;">ログイン</v-btn>
    </v-layout>
  </v-toolbar>
  <v-jumbotron>
    <v-container>
      <v-layout column align-center justify-center>
        <Form v-if="isLogin"></Form>
        <h1 v-else class="display-2 text-xs-center">HOME</h1>
      </v-layout>
    </v-container>
  </v-jumbotron>
</v-app>
</template>

<script>
import Form from '~/components/Form.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',
  methods: {
    ...mapActions({
      'login': 'login'
    })
  },
  computed: {
    ...mapGetters({
      'isLogin': 'getIsLogin'
    })
  },
  components: {
    Form
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #cc0e0e;
}
</style>