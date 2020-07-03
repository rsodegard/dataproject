import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = () => {
  return (
    <Fragment>
      <nav id='main-nav'>
        <div className='container'>
          <Link to='/'>
            <h4>Washington Business Search</h4>
          </Link>

          {/* <ul>
            <li>
              <Link to='/'>Link 2</Link>
            </li>
          </ul> */}
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
