<template>
  <div>
    <div class="question question-title">{{question.question_title}}</div>
    <div class="question question-guide">{{question.question_content}}</div>
    <div class="question question-guide">--{{question.asker.user_name}}问到</div>
    <div class="line"></div>
    <div class="question question-answerer">{{question.answerer.user_name}}答</div>
    <div class="question question-content" id="question-content"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { XHeader } from 'vux'
  import { GetQuestionDetail } from '../../../network/read/ReadRequest'
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
        question: {
          answer_title: '',
          question_title: '',
          question_content: '',
          asker: {
            user_name: ''
          },
          answerer: {
            user_name: ''
          }
        }
      }
    },
    methods: {
      initData: function () {
        let self = this
        let id = this.$route.params.id
        new GetQuestionDetail(id).start(function (data) {
          console.log(data.data.data)
          self.question = data.data.data
          document.getElementById('question-content').innerHTML = data.data.data.answer_content
        })
      }
    }
  }
</script>
<style lang="less">
  #swipe-item {
    width: 100%;
  }

  .question-title {
    color: #757575;
    font-size: 23px;
    font-weight: 200;
    letter-spacing: 1px;
  }

  .question {
    padding-left: 15px;
    padding-right: 15px;
  }

  .question-guide {
    padding-top: 10px;
    font-size: 13px;
    color: #999999;
    font-weight: 200;
    letter-spacing: 1px;
  }

  .line {
    width: 100%;
    height: 0.5px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #cccccc;
    opacity: 0.5;
  }

  .question-answerer {
    padding-top: 10px;
    font-size: 16px;
    color: #999999;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .question-content {
    padding-top: 10px;
    font-size: 15px;
    color: #666666;
    margin-bottom: 15px;
    font-weight: 300;
    letter-spacing: 1px;
  }

</style>
