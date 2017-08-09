<template>
  <div>
    <div class="essay-title">{{essay.hp_title}}</div>
    <div class="essay essay-guide">"{{essay.guide_word}}"</div>
    <audio style="margin-top: 5px;margin-left: 15px" :src="essay.audio" controls="controls" v-if="canAudio"></audio>
    <p style="margin-left: 15px" id="essay-anchor" v-if="canAudio">{{essay.anchor}}</p>
    <div class="essay essay-content" id="essay-content"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { XHeader } from 'vux'
  import { GetArticleDetail } from '../../../network/read/ReadRequest'
  export default{
    components: {
      XHeader
    },
    mounted: function () {
      this.initData()
    },
    data () {
      return {
        canAudio: false,
        essay: {
          hp_title: ''
        }
      }
    },
    methods: {
      initData: function () {
        let self = this
        let id = this.$route.params.id
        new GetArticleDetail(id).start(function (data) {
          console.log(data.data.data)
          self.essay = data.data.data
          document.getElementById('essay-content').innerHTML = data.data.data.hp_content
          if (self.essay.audio) {
            self.canAudio = true
          }
        })
      }
    }
  }
</script>
<style lang="less">
  #swipe-item {
    width: 100%;
  }

  .essay-title{
    font-size: 22px;
    color: #999999;
    font-weight: 300;
    text-align: center;
    letter-spacing: 1px;
  }
  .essay {
    padding-left: 15px;
    padding-right: 15px;
  }

  .essay-guide {
    padding-top: 10px;
    font-size: 14px;
    color: #999999;
    font-weight: 300;
    letter-spacing: 1px;
  }

  .essay-content {
    padding-top: 10px;
    font-size: 15px;
    color: #666666;
    margin-bottom: 15px;
    font-weight: 300;
    letter-spacing: 1px;
  }

  #essay-anchor {
    font-size: 10px;
    color: #999999;
    font-weight: 300;
  }
</style>
