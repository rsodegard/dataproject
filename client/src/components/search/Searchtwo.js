import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

const Searchtwo = () => {
  const [query, setQuery] = useState({
    search: '',
  });
  const [results, setResults] = useState([]);

  return (
    <Fragment>
      <div className='container'>
        <section id='sexy-forms'>
          <div className='sexy-forms-container'>
            <div className='card normal-form-card'>
              <div className='sexy-forms-wrapper'>
                <form className='eightytwenty'>
                  <div className='normal-form-label'>
                    <input type='text' name='search' placeholder='John Doe' />
                  </div>
                  <input
                    type='submit'
                    value='Search'
                    className=' btn-open-circle'
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Searchtwo;
