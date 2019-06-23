import * as actionCreators from './actionTypes'

const defaultStore = {
  focused: false  
};

export default ( store = defaultStore, action) => {
  if(action.type === actionCreators.SEARCH_FOCUS){
    return {
      focused: true
    }
  }

  if(action.type === actionCreators.SEARCH_BLUR){
    return {
      focused: false
    }
  }

  
  return store; 
}