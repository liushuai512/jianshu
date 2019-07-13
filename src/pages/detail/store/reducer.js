//import * as actionCreators from './actionTypes'
import { fromJS } from 'immutable'
import * as constants from './constants';

const defaultStore = fromJS({
  title:'',
  content: ''
})


export default ( state = defaultStore, action) => {
  switch(action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.titless,
        content: action.content
      })
      
    default:
      return state;
  }
}