import axios from 'axios';
import * as constants from './constants';

const changeHomeData = ( result ) => ({
  type: constants.CHANGE_HOME_DATA,
  topiclist: result.topiclist,
  recommendList: result.recommendList,
  articleList: result.articleList
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res)=>{
      const result = res.data.data;
      dispatch(changeHomeData(result))
    })
  }
}