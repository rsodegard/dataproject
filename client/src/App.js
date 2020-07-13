import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Search from './components/search/Search';
import Searchtwo from './components/search/Searchtwo';
import ResultsPage from './components/search/ResultsPage';

//redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/search" component={Search} />
            <Route exact path="/searchtwo" component={Searchtwo} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
