/**
 * Created by coderxuan on 2017/7/21.
 */
import Vue from 'vue'
import { AjaxPlugin } from 'vux'
import Urls from '../constants/Urls'
Vue.use(AjaxPlugin)
class BaseRequest {
  constructor (params) {
    this.params = params
  }

  requestUrl () {}

  async start (successCallback, failCallBack) {
    let url = Urls.base + this.requestUrl()
    if (this.params) {
      url += this.params
    }
    console.log(url)
    Vue.http.get(url)
      .then(function (response) {
        successCallback(response)
      })
      .catch(function (error) {
        console.log(error)
        failCallBack(error)
      })
  }
}

export default BaseRequest
