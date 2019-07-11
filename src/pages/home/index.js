import React, { PureComponent } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store'

import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTo
} from './style';


class Home extends PureComponent {

  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillMount(){
    window.removeEventListener('scroll',this.props.changeScroolTopShow)
  }

  handleScrollTop(){
    window.scrollTo(0,0)
  }

  bindEvents(){
    window.addEventListener('scroll',this.props.changeScroolTopShow)
  }

  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt='' className='banner-img' src='//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          this.props.showScroll?<BackTo onClick={this.handleScrollTop}>回到顶部</BackTo>:''
        }
        
      </HomeWrapper>
    )
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData(){
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScroolTopShow(){
    if(document.documentElement.scrollTop > 400){
      dispatch(actionCreators.toggleTopShow(true));
    }else{
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
})

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

export default connect(mapState,mapDispatch)(Home);