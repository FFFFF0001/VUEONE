/**
 * Created by coderxuan on 2017/7/21.
 */
import baseRequest from '../baseRequest'
import Urls from '../../constants/Urls'
class GetPictureIdList extends baseRequest {
  requestUrl () {
    return Urls.picture.getPictureIdList
  }
}
class GetPictureDetail extends baseRequest {
  requestUrl () {
    return Urls.picture.getPictureDetail
  }
}
export {
  GetPictureIdList,
  GetPictureDetail
}
