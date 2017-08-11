<template>
  <div class="container">
    <transition name="plane"
                v-on:after-leave="afterPlaneLeave"
    >
      <div class="about-wrapper" v-if="showPlane">
        <div class="plane-wrapper" style="left: -5px;" @click="goPlane()">
          <img class="plane" src="../../assets/images/plane.svg">
          <div class="rotate-container">
            <img class="propeller"
                 src="../../assets/images/propeller.svg">
          </div>
        </div>
      </div>
    </transition>
    <div class="text-rtr" v-if="showPlane">欢迎来到隐藏剧情</div>
    <transition name="word">
      <div class="text-info" id="sth-word" v-if="showInfo"></div>
    </transition>
    <transition name="running"
                v-on:after-enter="afterGirlEnter"
                v-on:after-leave="afterGirlLeave"
    >
      <Girl v-if="showGirl"></Girl>
    </transition>
    <transition name="word">
      <div class="text-rtr" v-if="showBlogEnter" @click="goGirl()">进入博客</div>
    </transition>
    <Cloud></Cloud>
  </div>
</template>
<script type="text/ecmascript-6">
  import Cloud from './cloud.vue'
  import Girl from './girl.vue'
  export default{
    components: {
      Cloud,
      Girl
    },
    data () {
      return {
        showPlane: true,
        index: 0,
        showInfo: false,
        word: '保持技术嗅觉，热爱开源的一切。',
        showGirl: false,
        showBlogEnter: false
      }
    },
    methods: {
      goPlane: function () {
        this.showPlane = !this.showPlane
      },
      showWord: function () {
        if (this.index === this.word.length) {
          this.showGirl = true
        }
        document.getElementById('sth-word').innerText = this.word.substring(0, this.index++)
      },
      afterPlaneLeave: function () {
        setInterval(this.showWord, 200)
        this.showInfo = true
      },
      goGirl: function () {
        this.showGirl = !this.showGirl
      },
      afterGirlEnter: function () {
        this.showBlogEnter = true
      },
      afterGirlLeave: function () {
        window.location.href = 'http://mifind.online'
      }
    }
  }
</script>
<style lang="less">
  .container {
    flex: 1;
    width: 100%;
    height: 675px;
    justify-content: center;
    padding: 0;
  }

  #sth-word {
    padding: 10px 20px;
  }

  .text-rtr {
    text-align: center;
    padding: 0;
    margin-top: 50px;
    font-size: 25px;
    font-weight: 200;
    letter-spacing: 1px;
    color: #5E616A
  }

  .text-info {
    text-align: center;
    padding: 80px 0;
    font-size: 25px;
    font-weight: 200;
    letter-spacing: 1px;
    color: whitesmoke;
  }

  .about-wrapper {
    position: relative;
    width: 60%;
    margin: 0px 0 20px 20%;
    padding: 20px 0;
    animation: mymove 2s infinite alternate;
    -webkit-animation: mymove 2s infinite alternate; /* Safari and Chrome */
    animation-timing-function: linear;
  }

  .plane-wrapper .plane {
    max-width: 100%;
    width: 100%;
  }

  .plane-wrapper .propeller {
    width: 100%;
    -webkit-transform: rotateY(-28deg);
    transform: rotateY(-28deg);
    stroke: white;
  }

  .plane-wrapper .rotate-container {
    position: absolute;
    top: 51.7003%;
    left: 13.1%;
    display: inline-block;
    width: 27.424%;
    height: 14.4474%;
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation: rotating .2s linear infinite reverse;
    animation: rotating .2s linear infinite reverse;
  }

  .word-enter {
    transition: all 1s ease
  }

  .plane-leave-active {
    animation-name: plan-out;
    animation-duration: 1s;
  }

  .running-enter-active {
    animation-name: girl-open;
    animation-duration: 5s;
  }

  .running-leave-active {
    animation-name: girl-leave;
    animation-duration: 5s;
  }

  @keyframes girl-open {
    0% {
      transform: translate3d(120%, 120%, 0)
    }
    100% {
      transform: translate3d(0, 0, 0)
    }
  }

  @keyframes girl-leave {
    0% {
      transform: rotate(0deg) skew(0deg) scale(1);
      -ms-transform: rotate(0deg) skew(0deg) scale(1); /* IE 9 */
      -moz-transform: rotate(0deg) skew(0deg) scale(1); /* Firefox */
      -webkit-transform: rotate(0deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
      -o-transform: rotate(0deg) skew(0deg) scale(1);
    }
    100% {
      transform: rotate(0deg) skew(0deg) scale(0);
      -ms-transform: rotate(0deg) skew(0deg) scale(0); /* IE 9 */
      -moz-transform: rotate(0deg) skew(0deg) scale(0); /* Firefox */
      -webkit-transform: rotate(0deg) skew(0deg) scale(0); /* Safari ºÍ Chrome */
      -o-transform: rotate(0deg) skew(0deg) scale(0);
    }
  }

  @keyframes plan-out {
    0% {
      transform: translate3d(0, 0, 0)
    }
    100% {
      transform: translate3d(-120%, -120%, 0) scale(0.4)
    }
  }

  @-webkit-keyframes rotating {
    0% {
      transform: rotate(0deg) skew(0deg) scale(1);
      -ms-transform: rotate(0deg) skew(0deg) scale(1); /* IE 9 */
      -moz-transform: rotate(0deg) skew(0deg) scale(1); /* Firefox */
      -webkit-transform: rotate(0deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
      -o-transform: rotate(0deg) skew(0deg) scale(1);
    }
    100% {
      transform: rotate(360deg) skew(0deg) scale(1);
      -ms-transform: rotate(360deg) skew(0deg) scale(1); /* IE 9 */
      -moz-transform: rotate(360deg) skew(0deg) scale(1); /* Firefox */
      -webkit-transform: rotate(360deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
      -o-transform: rotate(360deg) skew(0deg) scale(1);
    }
  }

  @keyframes rotating {
    0% {
      transform: rotate(0deg) skew(0deg) scale(1);
      -ms-transform: rotate(0deg) skew(0deg) scale(1); /* IE 9 */
      -moz-transform: rotate(0deg) skew(0deg) scale(1); /* Firefox */
      -webkit-transform: rotate(0deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
      -o-transform: rotate(0deg) skew(0deg) scale(1);
    }
    100% {
      transform: rotate(360deg) skew(0deg) scale(1);
      -ms-transform: rotate(360deg) skew(0deg) scale(1); /* IE 9 */
      -moz-transform: rotate(360deg) skew(0deg) scale(1); /* Firefox */
      -webkit-transform: rotate(360deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */
      -o-transform: rotate(360deg) skew(0deg) scale(1);
    }
  }

  @keyframes mymove {
    from {
      top: 0px;
    }
    to {
      top: 20px;
    }
  }

  @-webkit-keyframes mymove /* Safari and Chrome */
  {
    from {
      top: 0px;
    }
    to {
      top: 20px;
    }
  }
</style>
