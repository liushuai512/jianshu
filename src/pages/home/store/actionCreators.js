import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable'

const changeHomeData = ( result ) => ({
  type: constants.CHANGE_HOME_DATA,
  topiclist: result.topiclist,
  recommendList: result.recommendList,
  articleList: result.articleList
})

const addHomeList = ( list, nextPage ) => ({
  type: constants.ADD_HOME_LIST,
  list: fromJS(list),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res)=>{
      const result = res.data.data;
      dispatch(changeHomeData(result))
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page' + page).then((res)=>{
      const result = res.data.data;
      console.log(result)
      dispatch(addHomeList(result, page + 1))
    })
     
  }
}