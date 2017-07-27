<template>
  <div>
    <Drawer title="音乐" ref="drawer"/>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in musicIds">
        <swipeItem id="swipe-item" :data="item"></swipeItem>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  import { GetMusicIdList } from '../../network/music/MusicRequests'
  import Drawer from '../../components/common/drawer.vue'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import swipeItem from '../common/music/swipeItem.vue'
  export default{
    components: {
      Drawer,
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

</style>
