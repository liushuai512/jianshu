import * as actionCreators from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
  type: actionCreators.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
  type: actionCreators.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: actionCreators.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: actionCreators.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: actionCreators.MOUSE_LEAVE
});

export const changePage = (page) => ({
  type: actionCreators.CHANGE_PAGE,
  page
});

export const getList = () => {
  return ( dispatch ) => {
    axios.get('/api/headerlist.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data))
    }).catch(() => {
      console.log('error')
    })
  }
}
