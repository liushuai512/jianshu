import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  
  border-bottom: 1px solid #f0f0f0;
`

export const HeaderNav = styled.div`
  max-width: 1440px;
  min-width: 768px;
  margin: 0 auto;
  position: relative;
  height: 56px;
`

export const Logo = styled.a.attrs({href: '/'})`
  position: absolute;
  top: 0;
  left: 0;  
  display: block; 
  width: 100px;
  height: 58px;
  background: url(${logoPic});
  background-size: contain
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto; 
  padding-right:70px;
  box-sizing: border-box; 
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left
  }
  &.right {
    float: right;
    color: #969696;
  }  
  &.active {
    color: #ea6f5a
  }
` 

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 10px;
  margin-left: 20px;
  box-sizing: border-box;
  border: 1px solid #eee;
  outline: none;
  border-radius: 19px;  
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder{
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  
  .zoom{
    position: absolute;
    right: 5px; 
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;  
    text-align: center
    &.focused {
      background: #777;
      color: #fff;
    }

  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px; 
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba( 0, 0, 0, .2 );
  background: #fff
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin{
    display: block;
    float: left;
    font-size: 13px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`

export const SearchInfoList = styled.span`
  overflow: hidden;
`

export const SearchInfoItem = styled.span`
  display: block;
  float: left;
  font-size: 12px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  line-height: 20px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 10px; 
  height: 56px;
`

export const Button = styled.div`
  float: right;
  line-height: 38px;
  padding: 0 20px;
  margin-top:9px;
  margin-left: 20px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  box-sizing: border-box;
  &.reg{
    color: #ec6149
  }
  &.writting{
    color: #fff;
    background: #ec6149
  }
`


