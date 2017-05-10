<template>
  <div class="page">
    <div class="flex-container">
      <div class="flex-box">
        <div class="upload-wrap">
          <vue-core-image-upload url="/upload" :class="['btn-upload-image']"></vue-core-image-upload>
        </div>
        <div class="btn-edit-uplaod">
          <a href="" class="btn-primary btn-circle" data-tooltip="编辑上传选项">
            <svg class="svg-icon" viewBox="0 0 1024 1024" ><path d="M896 293.504l-165.504-165.504c-12.501-12.501-28.928-18.731-45.269-18.731-16.384 0-32.725 6.229-45.227 18.731l-466.731 466.731c-12.501 12.501-23.808 31.019-32 50.688-8.192 19.755-13.269 40.917-13.269 58.581v192h192c17.664 0 38.741-5.077 58.496-13.269 19.755-8.192 38.229-19.499 50.731-32l466.773-466.731c12.501-12.501 18.731-28.928 18.731-45.269 0-16.384-6.229-32.725-18.731-45.227zM246.101 642.603l353.835-353.835 52.565 52.565-353.835 353.835-52.565-52.565zM320 810.667h-64l-42.667-42.667v-64c0-3.285 1.408-13.013 6.741-25.813 0.427-0.853 126.592 125.355 126.592 125.355-13.739 5.717-23.381 7.125-26.667 7.125zM381.397 777.899l-52.565-52.565 353.835-353.835 52.565 52.565-353.835 353.835zM765.397 393.899l-135.339-135.339 55.168-55.168 135.253 135.339-55.083 55.168z"></path></svg>
          </a>
        </div>
      </div>
      <div class="flex-box">
        <h3> 图片上传列表 </h3>
        <div class="image-list">
          <div class="item" v-for="item in list">
            <a href=""><img height="40" width="60" :src="item.src"></a>
            <div class="image-name">{{item.name}}</div>
            <div class="btn-group">
              <button class="btn btn-default">复制地址</button>
              <button class="btn btn-default">MarkDown</button>
            </div>
          </div>
        </div>
      </div>
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
