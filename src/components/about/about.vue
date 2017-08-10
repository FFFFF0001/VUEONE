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
    <div v-if="showPlane">欢迎来到隐藏剧情</div>
    <transition name="word"
                v-on:l="leave">
      <div id="sth-word" v-if="showInfo"></div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        showPlane: true,
        index: 0,
        showInfo: false,
        word: '保持技术嗅觉，热爱开源的一切，为成为一名攻城狮而不是码农而努力，欢迎进入我的博客。'
      }
    },
    methods: {
      goPlane: function () {
        this.showPlane = !this.showPlane
      },
      showWord: function () {
        if (this.index === this.word.length) {
          window.location.href = 'http://mifind.online'
        }
        document.getElementById('sth-word').innerText = this.word.substring(0, this.index++)
      },
      afterPlaneLeave: function (el) {
        setInterval(this.showWord, 200)
        this.showInfo = true
      }
    }
  }
</script>
<style lang="less">
  .container {
    width: 100%;
    height: 750px;
    background-color: rgb(255, 210, 0);
    justify-content: center;
    padding: 20px 0 20px 0;
  }

  #sth-word {
    padding: 10px 20px;
  }

  .about-wrapper {
    position: relative;
    background-color: rgb(255, 210, 0);
    width: 60%;
    margin: 0 0 20px 20%;
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

  .word-open-active {
    transition: all 0.5s ease
  }

  .plane-leave-active {
    animation-name: plan-out;
    animation-duration: .5s;
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
