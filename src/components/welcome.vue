<template lang="html">
  <transition name="fade">
    <div class="wrapper" v-if="display">
      <div class="popover" @click="hide">
        <ul class="list">
          <li>1. Add new pages in '/src/routes/'</li>
          <li>2. Jquery and polyfill for 'Promise' are provided as global plugin, you can modify it in /build/webpack.base.config.js</li>
          <li>3. Eslint loader is commented out.</li>
          <li>4. Have fun!</li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      display:false
    }
  },
  methods:{
    hide(){
      this.display = false;
    }
  },
  created () {
    this.display = true;
  }
}
</script>

<style lang="css">
.wrapper{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(105, 105, 105, 0.7);
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popover{
  cursor: pointer;
  width: 38.2%;
  height: auto;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  text-align: center;
  z-index: 102;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.list{
  font-size: 24px;
  line-height: 3;
  text-align: left;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-active{
  opacity: 0
}
</style>
