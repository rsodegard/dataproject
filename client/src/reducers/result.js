import { SEARCH } from '../actions/types';

const initialState = {
  loading: true,
  results: [],
  result: null,
  search: '',
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SEARCH:
      return {
        ...state,
        loading: false,
        results: payload,
        search: '',
      };
    default:
      return state;
  }
}
