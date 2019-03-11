import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import Products from './routes/Products';
// import Mypage from './components/myPage'
// import myUpload from './components/Upload'
import Home from './components/Home'
import Eeasel from './components/Eeasel'
import Test from './components/Test'


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/easel" exact component={Eeasel} />
        <Route path="/test" exact component={Test} />
        {/* <Route path="/products" exact component={Products} />
        <Route path="/mypage" exact component={Mypage} />
        <Route path="/Upload" exact component={myUpload} />
         */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
