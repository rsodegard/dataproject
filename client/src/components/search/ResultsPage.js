import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getResults } from '../../actions/search';
import result from '../../reducers/result';

const ResultsPage = ({ getResults, result: { results, loading } }) => {
  useEffect(() => {
    getResults();
  }, [getResults]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container">
        <section>Hello{results.count}</section>
      </div>
    </Fragment>
  );
};

ResultsPage.propTypes = {
  getResults: PropTypes.func.isRequired,
  //is this the nam eof the reducer file, or the name of the state variable
  result: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  result: state.result,
});

export default connect(mapStateToProps, { getResults })(ResultsPage);
