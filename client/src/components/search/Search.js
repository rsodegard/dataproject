import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';

const Search = (props) => {
  const [formData, setFormData] = useState({
    search: '',
  });

  const { search } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Fragment>
      <div className='container'>
        <section id='sexy-forms'>
          <div className='sexy-forms-container'>
            <div className='card normal-form-card'>
              <div className='sexy-forms-wrapper'>
                <form onSubmit={(e) => onSubmit(e)}>
                  <div className='normal-form-label'>
                    <label htmlFor=''>Search</label>
                    <input
                      type='text'
                      name='search'
                      placeholder='John Doe'
                      value={search}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <input
                    type='submit'
                    value='Submit'
                    className='btn btn-open-circle mt-1 py-1'
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

export default Search;

//You might need to see how you hit the route with the search. without redux, you will do the action here. But, you will not create a new model, so its a little different.
