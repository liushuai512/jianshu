import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style'

class Login extends PureComponent {
  render(){
    //console.log(this.props.location.search)
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder='账号'/>
          <Input placeholder='密码'/>
          <Button>登陆</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }
  
}

const mapState = (state) => ({
  
})

const mapDispatch = (dispatch) => ({
  
})

export default connect(mapState, mapDispatch)(Login);