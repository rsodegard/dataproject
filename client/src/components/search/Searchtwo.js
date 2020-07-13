import React, { Fragment, useState, useEffect } from 'react';
import ResultsPage from './ResultsPage';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResults } from '../../actions/search';

const Searchtwo = ({ getResults, history }) => {
  const [formData, setFormData] = useState({
    search: '',
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    let searchCap = search.toUpperCase();
    const silk = searchCap.split(' ');
    getResults(silk, history);
  };

  const { search } = formData;
  return (
    <Fragment>
      <div className="container">
        <section id="sexy-forms">
          <div className="sexy-forms-container">
            <div className="card normal-form-card">
              <div className="sexy-forms-wrapper">
                <form onSubmit={(e) => onSubmit(e)} className="eightytwenty">
                  <div className="normal-form-label">
                    <input
                      type="text"
                      name="search"
                      placeholder="John Doe"
                      value={search}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Search"
                    className=" btn-open-circle"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ResultsPage />;
    </Fragment>
  );
};

Searchtwo.propTypes = {
  getResults: PropTypes.func.isRequired,
};

export default connect(null, { getResults })(Searchtwo);
