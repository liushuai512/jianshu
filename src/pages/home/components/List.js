import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';

class List extends Component {
  render(){
    const { list, getMoreList, page } = this.props;
    return (
      <>
        {
          list.map((item, index) => {
            return (
              <ListItem key={index}>
                <img className='pic' src={item.get('imgUrl')} alt=''/>
                <ListInfo>
                  <h3 className='title'> {item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page) }>更多文字</LoadMore>
      </>
      
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'acticlePage'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(page){
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapState, mapDispatch)(List);