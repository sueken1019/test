<template>
<div>
    <p class="error">{{ error }}</p>
    <textarea v-model="impression"></textarea>
</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('textarea')


export default {
  name: 'textareaComp',
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

<style scoped>
.error {
  color: red;
}
</style>

