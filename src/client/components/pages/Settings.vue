<template>
  <div class="page">
    <div class="btn-list">
      
    </div>
    
  </div>
</template>

<style>
  .btn-upload-image{
    margin-top: 20px;
    width: 100%;
    height: 200px;
    background-color: #ddd;
    
  }
  .btn-edit-uplaod {
    text-align: right;
    padding-top: 20px;
  }
  .btn-edit-uplaod .svg-icon{
    fill: #fff;
  }
  
</style>

<script>
import VueCoreImageUpload from 'vue-core-image-upload';

export default {
  components: {
    VueCoreImageUpload,
  },
  data() {
    return {
      list: [
        {
          src: 'https://mir-s3-cdn-cf.behance.net/projects/404/ce919652243157.Y3JvcCw3MjQsNTY3LDQwOCwxMzc.png',
          name: 'green city',
        },
      ],
    };
  },
};
</script>
