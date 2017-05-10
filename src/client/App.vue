<template>
  <div id="app">
    <hd></hd>
    <div class="router">
      <router-view></router-view>
    </div>
    <ft></ft>
  </div>
</template>

<script>
import Hd from './components/Hd.vue';
import Ft from './components/Ft.vue';

export default {
  name: 'app',
  components: {
    Hd,
    Ft,
  },
};
</script>

