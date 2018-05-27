<template>
  <h1>{{ title }}</h1>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('head')

export default {
  name: 'headComp',
  computed: {
    ...mapGetters({
    'title': 'getTitle'
    })
  }
}
</script>
