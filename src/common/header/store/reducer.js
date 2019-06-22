const defaultStore = {
  focused: false  
};

export default ( store = defaultStore, action) => {
  if(action.type === 'search_focus'){
    return {
      focused: true
    }
  }

  if(action.type === 'search_blur'){
    return {
      focused: false
    }
  }

  
  return store; 
}