import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { 
  HeaderWrapper, 
  Logo, 
  Nav, 
  NavItem, 
  NavSearch,  
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  SearchWrapper, 
  Addition, 
  Button } from './style'
import { IconfontStyle } from '../../statics/iconfont/iconfont'

class Header extends Component {
  getListArea(){
    const { focused, list } = this.props;
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>
              换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              list.map((item) => {
                return <SearchInfoItem key = {item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null;
    }
  }
  render () {
    const { focused, handleInputFocus, handleInputblur } = this.props;
    return (
      <HeaderWrapper>
        <IconfontStyle/>
        <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登陆</NavItem>   
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in = {focused}
              timeout={200}
              classNames = "slide"  
            >
              <NavSearch 
                className = {focused ? 'focused' : ''} 
                onFocus = {handleInputFocus}
                onBlur = {handleInputblur}
                ></NavSearch>
            </CSSTransition>
            <i className = {focused ? 'focused iconfont' : 'iconfont'}>&#xe637;</i>
            { this.getListArea() }
          </SearchWrapper>
          
        </Nav>
        <Addition>
          
          <Button className='writting'><i className="iconfont">&#xe62d;</i>写文章</Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    //focused: state.get('header').get('focused')
    list: state.getIn(['header', 'list'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(){
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },

    handleInputblur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);