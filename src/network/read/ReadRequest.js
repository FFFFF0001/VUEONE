/**
 * Created by coderxuan on 2017/7/21.
 */
import baseRequest from '../baseRequest'
import Urls from '../../constants/Urls'
class GetLatestArticle extends baseRequest {
  requestUrl () {
    return Urls.read.getLatestArticle
  }
}
class GetArticleDetail extends baseRequest {
  requestUrl () {
    return Urls.read.getArticleDetail
  }
}
class GetQuestionDetail extends baseRequest {
  requestUrl () {
    return Urls.read.getQuestionDetail
  }
}
export {
  GetLatestArticle,
  GetArticleDetail,
  GetQuestionDetail
}
