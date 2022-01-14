import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from './pages/Home';
import Foo from './pages/Foo';
import Bar from './pages/Bar';

function App() {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react17' : '/'}>
      <div>
        <Link to='/'>home</Link> |
        <Link to='/foo'>foo</Link> |
        <Link to='/bar'>bar</Link>
      </div>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/foo' element={<Foo/>}/>
        <Route path='/bar' element={<Bar/>}/>
      </Routes>
    </Router>
  );
}

export default App;
