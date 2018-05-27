<template>
  <div>
    <HeadComp></HeadComp>
    <component :is="isComponent"></component>
    <button v-on:click="buttonAction">{{ button }}</button>
  </div>
</template>
<script>
import HeadComp from '~/components/modules/HeadComp.vue'
import TextareaComp from '~/components/modules/TextareaComp.vue'
import StringComp from '~/components/modules/StringComp.vue'
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
      'isComponent': 'getComponent'
    }) 
  },
  components: {
    HeadComp,
    TextareaComp,
    StringComp
  }
}
</script>
