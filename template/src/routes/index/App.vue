<template lang="html">
<div>
  <h2>{{msg}}</h2>
  <g-welcome></g-welcome>
</div>
</template>

<style lang="css">
</style>

<script>
import Welcome from '@/components/welcome'
export default {
  data () {
    return {
      msg: 'This is index.'
    }
  },
  components:{
    'g-welcome':Welcome
  }
}
</script>
