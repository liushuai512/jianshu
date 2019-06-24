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
  }],
  articleList: [{
    id: 1,
    title: '茅塞顿开——量子科学，已经触及到了灵魂世界！',
    desc: '茅塞盾开 2018-10-02 00:10 量子科学，随着中国量子卫星的发射成功，将变得越来越炙手可热。但是，量子科学对多数人来讲，是一门深不可...',
    imgUrl: '//upload-images.jianshu.io/upload_images/11374144-7a5d293c3c9cf45e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 2,
    title: '强烈推荐的 Chrome 插件',
    desc: '昨天写了一篇免费访问 Google 的文章，感觉帮到了一些小伙伴，甚至有好几个小伙伴都在后台给我留言，哈哈哈。能够访问 Google 的浏览器插...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/2164115-0f0dc687f742460d.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 3,
    title: '一表人才的丈夫和矮胖身材的妻子',
    desc: '有的夫妻，看起来不相配，但却过得极其幸福，丈夫一表人才，工作出色。妻子呢，矮胖的身材，看着比丈夫要老好几岁。更严重的是，妻子由于肥胖，不孕不育。...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/14753134-2c4c890ac8c675ed.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 4,
    title: '我在面试中经常会问的两个问题',
    desc: '面试久了之后，发现自己每次都会问下面这两个问题。 线程池相关 问：你讲讲线程池的实现原理。 听到这个问题，小部分同学会很坦白的说，我平时用过线程...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/16133539-3ac94860f51b4998.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }]
});

export default ( state = defaultStore, action) => {
  switch(action.type) {
    
    default:
      return state;
  }
}