/**
 * Created by coderxuan on 2017/7/27.
 */
import baseRequest from '../baseRequest'
import Urls from '../../constants/Urls'
class GetMusicIdList extends baseRequest {
  requestUrl () {
    return Urls.music.getMusicIdList
  }
}
class GetMusicDetail extends baseRequest {
  requestUrl () {
    return Urls.music.getMusicDetail
  }
}

export {
  GetMusicIdList,
  GetMusicDetail
}
