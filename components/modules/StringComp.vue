<template>
<p class="my-5">{{ string }}</p>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('string')

export default {
  name: 'stringComp',
  computed: {
    ...mapGetters({
    'string': 'getString'
    })
  }
}
</script>
