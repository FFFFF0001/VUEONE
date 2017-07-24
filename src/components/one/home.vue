<template>
  <div>
    <Drawer ref="drawer"/>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in pictureIds">
        <swipeItem id="swipe-item" :data="item"></swipeItem>
      </swiper-slide>
    </swiper>
    <swiper :options="swiperEssayOption" ref="mySwiper">
      <swiper-slide v-for="item in essays">
        <div @click="routeEassy(item.content_id)">
          <mu-card class="mu-story-card">
            <img class="story-img" src="../../assets/images/laud_selected.png"/>
            <div class="story-key">- ONE STORY -</div>
            <div class="story-title">{{item.hp_title}}</div>
            <div class="story-guide">{{item.guide_word}}</div>
            <div class="story-author">文/ {{item.author[0].user_name}}</div>
          </mu-card>
        </div>
      </swiper-slide>
    </swiper>
    <swiper style="margin-top: 10px" :options="swiperEssayOption" ref="mySwiper">
      <swiper-slide v-for="item in questions">
        <div @click="routeQuestion(item.question_id)">
          <mu-card class="mu-story-card">
            <img class="story-img" src="../../assets/images/laud_selected.png"/>
            <div class="story-key">- ONE QUESTION -</div>
            <div class="story-title">{{item.question_title}}</div>
            <div class="story-author">{{item.author_list[0].user_name}}答</div>
            <div class="story-guide">{{item.answer_content}}</div>
          </mu-card>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  import { GetPictureIdList } from '../../network/picture/PictureRequests'
  import { GetLatestArticle } from '../../network/read/ReadRequest'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import swipeItem from '../common/home/swipeItem.vue'
  import Drawer from '../../components/common/drawer.vue'
  const REQUEST_INST = 10
  export default{
    components: {
      swiper,
      swiperSlide,
      swipeItem,
      Drawer
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted: function () {
      if (this.pictureIds.length !== REQUEST_INST) {
        this.initData()
      }
    },
    data () {
      return {
        pictureIds: [],
        essays: [],
        questions: [],
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          effect: 'cube',
          initialSlide: 0,
          centeredSlides: true,
          slidesPerView: 'auto',
          crossFade: false
        },
        swiperEssayOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          effect: 'fade',
          initialSlide: 0,
          centeredSlides: true,
          slidesPerView: 'auto',
          crossFade: true
        }
      }
    },
    methods: {
      initData: function () {
        let self = this
        new GetPictureIdList().start(function (data) {
          self.pictureIds = data.data.data
        })
        new GetLatestArticle().start(function (data) {
          console.log(data.data.data)
          self.essays = data.data.data.essay
          self.questions = data.data.data.question
        })
      },
      routeEassy: function (id) {
        this.$router.push({
          name: 'readDetail',
          params: {
            'id': id
          }
        })
      },
      routeQuestion: function (id) {
        console.log(id)
      }
    }
  }
</script>
<style lang="less">
  #swipe-item {
    width: 100%;
  }

  swiper {
    height: auto;
  }

  .mu-story-card {
    padding-top: 10px;
    padding-right: 25px;
    padding-left: 25px;
    padding-bottom: 10px;
    display: flex;
    height: 160px;
    flex-direction: column;
    flex: 1;
    .story-key {
      text-align: center;
      font-size: 15px;
      color: #9e9e9e;
    }
    .story-img {
      position: absolute;
      width: 33px;
      height: 33px;
      margin-top: -5px;
      margin-left: -5px;
    }
    .story-title {
      margin-top: 10px;
      font-size: 19px;
      color: #666666;
    }
    .story-guide {
      margin-top: 5px;
      font-size: 15px;
      color: #999999;
    }
    .story-author {
      margin-top: 5px;
      font-size: 12px;
      color: #999999;
    }
  }
</style>
