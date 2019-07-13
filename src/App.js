import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';

import store from './store'
function App() {
  return (
    <Provider store = { store }>
      <BrowserRouter>
        <div>
          <Header/>
          <Route path='/' exact component = {Home}></Route>
          {/* 路径传参设置 */}
          {/* <Route path='/detail' exact component = {Detail}></Route> */}
          {/* 动态获取路由设置 */}
          <Route path='/detail/:id' exact component = {Detail}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
