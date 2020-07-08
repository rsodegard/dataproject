import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Search from '../search/Search';
import Searchtwo from '../search/Searchtwo';

const Landing = () => {
  return (
    <Fragment>
      <div className='card'>
        <Search />
      </div>
    </Fragment>
  );
};

export default Landing;
