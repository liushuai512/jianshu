import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom'

class List extends PureComponent {
  render(){
    const { list, getMoreList, page } = this.props;
    return (
      <>
        {
          list.map((item, index) => {
            return (
              //动态获取路由
              <Link key={index} to={'/detail/' + item.get('id')}>
              {/* //路径传参
              //<Link key={index} to={'/detail?id=' + item.get('id')}> */}
                <ListItem >
                  <img className='pic' src={item.get('imgUrl')} alt=''/>
                  <ListInfo>
                    <h3 className='title'> {item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
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