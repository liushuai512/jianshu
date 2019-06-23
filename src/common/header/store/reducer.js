import * as actionCreators from './actionTypes'
import { fromJS } from 'immutable'

const defaultStore = fromJS({
  focused: false,
  list: [] 
});

export default ( state = defaultStore, action) => {
  if(action.type === actionCreators.SEARCH_FOCUS){
    return state.set('focused', true)
  }

  if(action.type === actionCreators.SEARCH_BLUR){
    return state.set('focused', false)
  }

  if(action.type === actionCreators.CHANGE_LIST){
    return state.set('list', action.data)
  }
  
  return state; 
}