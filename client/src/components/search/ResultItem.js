import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ResultsPage from './ResultsPage';

const ResultItem = ({
  result: {
    FirstName,
    LastName,
    Ubi,
    Title,
    MiddleName,
    Address,
    City,
    State,
    Zip,
  },
}) => {
  return (
    <Fragment>
      <div className="result">
        <h3>
          {FirstName} {MiddleName} {LastName}
        </h3>
        <div>
          Address: {Address}, {City}, {State}, {Zip}
        </div>
        <div>Associated Business UBI: {Ubi}</div>
        <div>Title: {Title}</div>
      </div>
    </Fragment>
  );
};

ResultItem.propTypes = {
  result: PropTypes.object.isRequired,
};

// const mapStateToProps = (state) => ({
//   result: state.result,
// });

export default ResultItem;

//connect(mapStateToProps, {})
