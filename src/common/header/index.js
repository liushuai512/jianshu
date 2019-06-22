import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch,  SearchWrapper, Addition, Button } from './style'
import { IconfontStyle } from '../../statics/iconfont/iconfont'

const Header = ( props ) => {
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
              in = {props.focused}
              timeout={200}
              classNames = "slide"  
            >
              <NavSearch 
                className = {props.focused ? 'focused' : ''} 
                onFocus = {props.handleInputFocus}
                onBlur = {props.handleInputblur}
                ></NavSearch>
            </CSSTransition>
            <i className = {props.focused ? 'focused iconfont' : 'iconfont'}>&#xe637;</i>
          </SearchWrapper>
          
        </Nav>
        <Addition>
          
          <Button className='writting'><i className="iconfont">&#xe62d;</i>写文章</Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(){
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },

    handleInputblur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);