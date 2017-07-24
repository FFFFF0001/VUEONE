<template>
  <div>
    <mu-card>
      <div class="mu-card-sub-content">{{pictureDetail.hp_content}}</div>
      <img class="mu-img" @click="show=true" :src="pictureDetail.hp_img_url"/>
    </mu-card>
    <div v-transfer-dom>
      <x-dialog :hide-on-blur="hideBlur" v-model="show" class="dialog-demo">
        <img :src="pictureDetail.hp_img_url">
        <div style="margin-top: 10px;font-size: 13px;color:#414141">{{pictureDetail.text_authors}}</div>
        <div style="font-size: 11px;padding-bottom: 10px;color:#666666">{{pictureDetail.hp_author}}</div>
        <div class="dialog-content">{{pictureDetail.hp_content}}</div>
      </x-dialog>
    </div>
  </div>
</template>
<script>
  import { GetPictureDetail } from '../../../network/picture/PictureRequests'
  import { XDialog, TransferDomDirective as TransferDom } from 'vux'
  export default {
    directives: {
      TransferDom
    },
    components: {
      XDialog
    },
    mounted: function () {
      this.initData()
    },
    data () {
      return {
        show: false,
        hideBlur: true,
        id: this.$attrs.data,
        pictureDetail: {
          hp_content: '',
          hp_img_url: '',
          hp_author: '',
          text_authors: ''
        }
      }
    },
    methods: {
      initData: function () {
        let self = this
        let params = this.id
        new GetPictureDetail(params).start(function (data) {
          self.pictureDetail = data.data.data
        })
      }
    }
  }
</script>
<style lang="less">
  .mu-card-sub-content {
    position: absolute;
    width: 100%;
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.54);
    font-size: 13px;
    color: rgba(255, 255, 255, 0.64);
  }

  .dialog-demo {
    .weui-dialog {
      border-radius: 8px;
      padding-bottom: 8px;
    }
  }

  .mu-img {
    height: 2.5rem;
    width: 100%;
  }

  .dialog-content {
    font-size: 9px;
    padding-right: 25px;
    padding-left: 25px;
    padding-bottom: 10px;
    color: #999999
  }

</style>
