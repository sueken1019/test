<template>
  <v-content class="text-xs-center my-5">
    <HeadComp></HeadComp>
    <component :is="isComponent"></component>
    <Thanks v-if="getStepCount == 2"></Thanks>
    <v-btn color="primary" @click="buttonAction">{{ button }}</v-btn>
  </v-content>
</template>
<script>
import HeadComp from '~/components/modules/HeadComp.vue'
import TextareaComp from '~/components/modules/TextareaComp.vue'
import StringComp from '~/components/modules/StringComp.vue'
import Thanks from '~/components/modules/Thanks.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapGetters } = createNamespacedHelpers('form')

export default {
  name: 'Form',
  methods: {
    ...mapActions({
      'buttonAction': 'buttonAction'
    })
  },
  computed: {
    ...mapGetters({
      'button': 'getButton',
      'isComponent': 'getComponent',
      'getStepCount': 'getStepCount'
    }) 
  },
  components: {
    HeadComp,
    TextareaComp,
    StringComp,
    Thanks
  }
}
</script>
