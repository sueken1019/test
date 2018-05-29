<template>
  <!-- <p class="subheading red--text">{{ error }}</p> -->
  <v-form>
    <v-text-field 
      label="感想" 
      class="my-5" 
      v-model="impression" 
      :rules="nameRules" 
      required
  ></v-text-field>
  </v-form>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('textarea')


export default {
  name: 'textareaComp',
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      v => !!v || '入力は必須です',
    ]
  }),
  computed: {
    impression: {
      get() {
        return this.$store.state.impression 
      },
      set(value) {
        this.$store.commit('updateImpression', value)
      }
    },
    ...mapGetters({
      'error': 'getError'
    })
  }
}
</script>