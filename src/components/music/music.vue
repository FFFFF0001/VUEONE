<template>
  <div class="container">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in musicIds">
        <swipeItem id="swipe-item" :data="item"></swipeItem>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  import { GetMusicIdList } from '../../network/music/MusicRequests'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import swipeItem from './swipeItem.vue'
  export default{
    components: {
      swiper,
      swiperSlide,
      swipeItem
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted: function () {
      this.initData()
    },
    data () {
      return {
        musicIds: [],
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          effect: 'flip',
          initialSlide: 0,
          centeredSlides: true,
          slidesPerView: 'auto',
          crossFade: false
        }
      }
    },
    methods: {
      initData: function () {
        let self = this
        new GetMusicIdList().start(function (data) {
          self.musicIds = data.data.data
        })
      }
    }
  }
</script>
<style lang="less">
  @font-face {
    font-family: HanFontTTF;
    src: url('../../assets/font/han_type.ttf');
  }

  .container {
    font-family: HanFontTTF;
    margin-top: 5px;
  }
</style>
