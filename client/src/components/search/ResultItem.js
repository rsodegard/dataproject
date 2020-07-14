import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ResultsPage from './ResultsPage';

const ResultItem = ({ result: { FirstName, LastName } }) => {
  return (
    <Link className="card-result" to={`/`}>
      <div>
        Result {FirstName} {LastName}
      </div>
    </Link>
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
