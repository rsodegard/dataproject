import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Search = (props) => {
  const [formData, setFormData] = useState({
    search: '',
    results: [],
  });

  const { search } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const searchCap = search.toUpperCase();
      const silk = searchCap.split(' ');
      console.log(silk);
      if (!silk[1]) {
        const res = await axios.get(`/api/v1/discover/?FirstName=${silk[0]}`);
        console.log(res.data);
      } else {
        const res = await axios.get(
          `/api/v1/discover/?FirstName=${silk[0]}|LastName=${silk[1]}`
        );
        console.log(res.data);
      }
    } catch (err) {
      console.error(err.response.data);
    }

    setFormData({ search: '' });
  };

  return (
    <Fragment>
      <div className='container'>
        <section id='sexy-forms'>
          <div className='sexy-forms-container'>
            <div className='card normal-form-card'>
              <div className='sexy-forms-wrapper'>
                <form onSubmit={(e) => onSubmit(e)} className='eightytwenty'>
                  <div className='normal-form-label'>
                    {/* <label htmlFor=''>Search</label> */}
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

export default Search;

//You might need to see how you hit the route with the search. without redux, you will do the action here. But, you will not create a new model, so its a little different.
