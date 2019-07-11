import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { 
  HeaderWrapper, 
  HeaderNav,
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

class Header extends PureComponent {
  getListArea(){
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if(newList){
      for (let i = ( page-1 ) * 9; i < page * 9; i++ ){
        pageList.push(  
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    
    if ( focused || mouseIn ) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick = {() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref = {(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe606;</i>
              换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null;
    }
  }
  render () {
    const { focused, handleInputFocus, handleInputblur, list } = this.props;
    return (
      <HeaderWrapper>
        <HeaderNav>
          <IconfontStyle/>
          <Logo/>
          <Nav>
            <NavItem className='left active'><i className='iconfont'>&#xe67b;</i>首页</NavItem>
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
                  onFocus = {() => handleInputFocus(list)}
                  onBlur = {handleInputblur}
                  ></NavSearch>
              </CSSTransition>
              <i className = {focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe637;</i>
              { this.getListArea() }
            </SearchWrapper>
            
          </Nav>
          <Addition>
            
            <Button className='writting'><i className="iconfont">&#xe62d;</i>写文章</Button>
            <Button className='reg'>注册</Button>
          </Addition>
        </HeaderNav>
        
      </HeaderWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    //focused: state.get('header').get('focused')
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if(list.size === 0){
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },

    handleInputblur() {
      dispatch(actionCreators.searchBlur())
    },

    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },

    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave())
    },

    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');

      if(originAngle){
        originAngle = parseInt (originAngle, 10)
      }else{
        originAngle = 0
      }
      spin.style.transform = 'rotate(' + ( originAngle + 360 ) + 'deg)';

      if(page < totalPage){
        dispatch(actionCreators.changePage(page + 1))
      }else {
        dispatch(actionCreators.changePage(1))
      }
      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);