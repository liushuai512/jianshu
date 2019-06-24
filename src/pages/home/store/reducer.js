//import * as actionCreators from './actionTypes'
import { fromJS } from 'immutable'

const defaultStore = fromJS({
  topicList: [{
    id:1,
    title: '社会热点',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  },{
    id:2,
    title: '手绘',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }]
});

export default ( state = defaultStore, action) => {
  switch(action.type) {
    
    default:
      return state;
  }
}