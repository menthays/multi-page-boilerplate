<template lang="html">
<div>
  <h2>{{msg}}</h2>
  <p>1. Delete .git</p>
  <p>2. Add new pages in 'routes/'</p>
  <p>3. Start your projects!</p>
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
  },
  created(){
    let promise = new Promise(function(resolve, reject) {
      console.log('Promise');
      resolve();
    });
    promise.then(function() {
      console.log('Resolved.');
    });
    console.log('Hi!');
  }
}
</script>
