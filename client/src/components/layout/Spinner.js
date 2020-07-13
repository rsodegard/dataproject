import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
  <Fragment>
    <img
      className="pt-20"
      src={spinner}
      style={{
        width: '70px',
        margin: 'auto',
        display: 'block',
      }}
      alt="Loading..."
    />
  </Fragment>
);
