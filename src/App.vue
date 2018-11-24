<template>
  <div id="app">
   <div class="c_ontainer">
      <H_eader/>
   </div>
   <div class="midle">
     <transition>
      <router-view></router-view>
     </transition>
    
   </div>
    <div class="tabbar">
     <N_avbar/>
   </div>
     </div>
  
</template>

<script>

import H_eader from './components/H_eader'
import N_avbar from './components/N_avbar'

export default {
  components: {
    H_eader,
    N_avbar
  }
}
</script>

<style>
.c-enter,
.v-leave-to{
  opacity:0;
  transform: translateX(100%);
}
.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}
mui-active{
  color: aquamarine;
}
</style>
