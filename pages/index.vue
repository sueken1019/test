<template>
<v-app id="app">
  <v-toolbar height="55px">
    <v-layout align-center class="secondary--text">
      <v-toolbar-title class="display-1">
        TEST
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="isLogin" color="primary" @click="login" style="height: 36px; width: 102px;">ログアウト</v-btn>
      <v-btn v-else color="primary" @click="login" style="height: 36px; width: 102px;">ログイン</v-btn>
    </v-layout>
  </v-toolbar>
  <v-jumbotron class="my-5">
    <v-container>
      <v-layout align-center justify-center class="secondary--text">
        <Form v-if="isLogin"></Form>
        <h1 v-else class="display-2 text-xs-center">HOME</h1>
      </v-layout>
    </v-container>
  </v-jumbotron>
</v-app>
</template>

<script>
import HeadComp from '~/components/modules/HeadComp.vue'
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
}
</style>