<template lang="html">
  <transition name="fade">
    <div class="wrapper" v-if="display">
      <div class="popover" @click="hide">
        <span class="text">Welcome to iGarment vue-cli</span>
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
  width: 50%;
  height: 50%;
  background-color: rgba(176,196,222, 0.5);
  border-radius: 10px;
  text-align: center;
  z-index: 102;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text{
  vertical-align: middle;
  transform: rotate(-7deg);
  font-size: 61.8px;
  font-weight: 600;
  background: linear-gradient(to bottom right, #ff9933, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-active{
  opacity: 0
}
</style>
