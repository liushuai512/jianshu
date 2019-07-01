//import * as actionCreators from './actionTypes'
import { fromJS } from 'immutable'
import * as constants from './constants';
const defaultStore = fromJS({
  topicList: [],
  articleList: [],
  recommendList:[],
  articlePage: 1
});

export default ( state = defaultStore, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topList: fromJS(action.topList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    case constants.ADD_HOME_LIST:
      return state.merge({
        'articleList': fromJS(state.get('articleList').concat(action.list)),
        'articlePage': fromJS(action.nextPage)
      })
      
    default:
      return state;
  }
}