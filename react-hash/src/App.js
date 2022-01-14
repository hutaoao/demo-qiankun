import React from "react";
import {HashRouter, Link, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import Foo from './pages/Foo';
import Bar from './pages/Bar';

function App() {
  return (
    <HashRouter>
      <div>
        <Link to='/'>home</Link> |
        <Link to='/foo'>foo</Link> |
        <Link to='/bar'>bar</Link>
      </div>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/foo' exact component={Foo}/>
        <Route path='/bar' exact component={Bar}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
