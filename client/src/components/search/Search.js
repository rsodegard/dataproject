import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Search = () => {
  const [formData, setFormData] = useState({
    search: '',
  });

  const [results, setResults] = useState({
    results: [],
  });

  const { search } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const fetchData = async () => {
    try {
      setResults(results);
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const searchCap = search.toUpperCase();
      const silk = searchCap.split(' ');
      console.log(silk);
      if (!silk[1]) {
        const res = await axios.get(`/api/v1/discover/?FirstName=${silk[0]}`);
        setResults('');
        setResults({ results: res.data });
        console.log(res.data);
      } else {
        const res = await axios.get(
          `/api/v1/discover/?FirstName=${silk[0]}&LastName=${silk[1]}`
        );
        setResults('');
        setResults({ results: res.data });
        console.log(res.data);
      }
    } catch (err) {
      console.error(err.response.data);
    }
    setFormData({ search: '' });
    //Need to clear the state for results on new search
  };

  //Only run when onSubmit changes if put in array
  useEffect(() => {
    fetchData();
  }, [onSubmit]);

  return (
    <Fragment>
      <div className="container">
        <section id="sexy-forms">
          <div className="sexy-forms-container">
            <div className="card normal-form-card">
              <div className="sexy-forms-wrapper">
                <form onSubmit={(e) => onSubmit(e)} className="eightytwenty">
                  <div className="normal-form-label">
                    {/* <label htmlFor=''>Search</label> */}
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
        <section>
          <div>{!results ? 'No results' : console.log(results)}</div>
        </section>
        <section>
          <div className="card">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            perferendis autem, dolorum ut eum ad sapiente perspiciatis, minus id
            minima explicabo, alias quod et ex in repellat eveniet laboriosam!
            Deserunt cum impedit quos dolore eos iusto, laboriosam, accusantium
            harum non debitis enim fugiat recusandae deleniti magni soluta
            corporis obcaecati nemo.
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Search;

//You might need to see how you hit the route with the search. without redux, you will do the action here. But, you will not create a new model, so its a little different.

//In state manament, I'll need to figure out how to title the return, so that the name results, is associated with the array.
