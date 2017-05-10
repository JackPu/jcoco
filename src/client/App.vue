<template>
  <div id="app">
    <hd></hd>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import Hd from './components/Hd.vue';

export default {
  name: 'app',
  components: {
    Hd,
  },
};
</script>

