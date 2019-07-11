//import * as actionCreators from './actionTypes'
import { fromJS } from 'immutable'
import * as constants from './constants';
const defaultStore = fromJS({
  topicList: [],
  articleList: [],
  recommendList:[],
  articlePage: 1,
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topList: fromJS(action.topList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  });
}

const addHomeList = (state, action) => {
  return state.merge({
    'articleList': fromJS(state.get('articleList').concat(action.list)),
    'articlePage': fromJS(action.nextPage)
  });
}

export default ( state = defaultStore, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case constants.ADD_HOME_LIST:
      return addHomeList(state, action)
    case constants.TOGGLE_SCROLL_SHOW:
      return state.set('showScroll', action.show);
      
    default:
      return state;
  }
}