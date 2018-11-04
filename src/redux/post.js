import axios from "axios";
import config from "../config";

const FETCH_POSTS = "post/FETCH_POSTS";
const ERROR_POSTS = "post/ERROR_POSTS";
const FILTER_POST = "post/FILTER_POST";

const initialState = {
  data: [],
  fetchedData: [],
  filter: "",
  error: ""
};

export const selectors = {
  getPosts: state => state.posts.data,
  getPostById: (state, id) =>
    state.posts.data
      ? state.posts.data.filter(post => post.id.toString() === id)[0]
      : undefined,
  getFetchedData: state => state.posts.fetchedData,
  getFilter: state => state.posts.filter,
  getError: state => state.posts.error
};

export const fetchPosts = () => {
  const request = axios.get(`${config.apiUrl}posts`);
  return dispatch => {
    request
      .then(({ data }) => {
        dispatch({
          type: FETCH_POSTS,
          data
        });
      })
      .catch(error => {
        dispatch({
          type: ERROR_POSTS,
          data: error.message
        });
      });
  };
};

export const filterPosts = filter => {
  return dispatch => {
    dispatch({
      type: FILTER_POST,
      data: filter
    });
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_POSTS: {
      const data = action.data;
      return Object.assign({}, state, { data, fetchedData: data });
    }
    case ERROR_POSTS: {
      const error = action.data;
      return Object.assign({}, state, { error });
    }
    case FILTER_POST: {
      const filter = action.data;
      const { fetchedData } = state;
      const data = fetchedData.filter(
        post => post.title.includes(filter) || post.body.includes(filter)
      );
      return Object.assign({}, state, { data, filter });
    }
    default:
      return state;
  }
}
