import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch,  SearchWrapper, Addition, Button } from './style'
import { IconfontStyle } from '../../statics/iconfont/iconfont'
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputblur = this.handleInputblur.bind(this)
  }

  handleInputFocus () {
    this.setState({
        focused: true
    })
  }

  handleInputblur () {
    this.setState({
        focused: false
    })
  }
  
  render() {
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
              in = {this.state.focused}
              timeout={200}
              classNames = "slide"  
            >
              <NavSearch 
                className = {this.state.focused ? 'focused' : ''} 
                onFocus = {this.handleInputFocus}
                onBlur = {this.handleInputblur}
                ></NavSearch>
            </CSSTransition>
            <i className = {this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe637;</i>
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

export default Header