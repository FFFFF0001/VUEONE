<template>
  <div style="height: 100%">
    <div class="music-story">{{musicDetail.story_title}}</div>
    <div class="music-audio">
      <img class="music-cover" @click="hrefMusic" :src="musicDetail.cover"/>
    </div>
    <div>
      <div class="music-info">{{musicDetail.author.user_name}} | {{musicDetail.author.desc}}</div>
      <div class="music music-summary">{{musicDetail.story_summary}}</div>
    </div>
  </div>
</template>
<script>
  import { GetMusicDetail } from '../../network/music/MusicRequests'
  export default {
    mounted: function () {
      this.initData()
    },
    data () {
      return {
        id: this.$attrs.data,
        musicDetail: {
          cover: '',  // 图片
          title: '', // 标题
          story_title: '', // 音乐故事图片
          story: '', // 音乐故事
          lyric: '', // 歌词
          web_url: '', // 地址
          story_summary: '', // 一句话
          author: {
            user_name: '',
            desc: ''
          }
        }
      }
    },
    methods: {
      initData: function () {
        let self = this
        let params = this.id
        new GetMusicDetail(params).start(function (data) {
          self.musicDetail = data.data.data
        })
      },
      hrefMusic: function () {
        window.location.href = this.musicDetail.web_url
      }
    }
  }
</script>
<style lang="less">
  .music-story {
    font-weight: 300;
    font-size: 20px;
    color: #333333;
    text-align: center;
    margin-bottom: 10px;
    padding: 5px;
  }

  .music {
    padding-right: 20px;
    padding-left: 20px;
  }

  .music-audio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .music-cover {
    width: 90%;
  }

  .music-play-background {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }

  .music-summary {
    font-weight: 300;
    font-size: 18px;
    color: #333333;
    text-align: center;
    margin-bottom: 10px;
  }

  .music-info {
    font-weight: 300;
    font-size: 10px;
    color: #999999;
    text-align: center;
    margin-bottom: 10px;
    padding: 5px;
    margin-top: 10px;
  }
</style>
