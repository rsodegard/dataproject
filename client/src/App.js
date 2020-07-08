import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Search from './components/search/Search';
import Searchtwo from './components/search/Searchtwo';

import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/search' component={Search} />
          <Route path='/searchtwo' component={Searchtwo} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
