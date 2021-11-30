import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import Foo from './pages/Foo';
import Bar from './pages/Bar';

function App() {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react-history-app' : '/child/react-history-app/'}>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/foo' exact component={Foo}/>
        <Route path='/bar' exact component={Bar}/>
      </Switch>
    </Router>
  );
}

export default App;
