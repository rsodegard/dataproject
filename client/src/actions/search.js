import axios from 'axios';
import { SEARCH } from './types';

//Search
export const getResults = (query, history) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/v1/discover/?FirstName=${query}`);

    dispatch({
      type: SEARCH,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

//I think I need to create the other component, results.
