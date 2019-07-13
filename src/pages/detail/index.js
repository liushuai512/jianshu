import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, Header, Content } from './style';
import { actionCreators } from './store'

class Detail extends PureComponent {

  render(){
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        {/* 被转义的内容 */}
        {/* <Content >{this.props.content}</Content> */}
        {/* 处理被转义的内容 */}
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}></Content>
      </DetailWrapper>
    )
  }
  componentDidMount(){
    this.props.getDetail()
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
  getDetail(){
    dispatch(actionCreators.getDetail())
  }
})

export default connect(mapState, mapDispatch)(Detail);