import { FETCH_AUTHORS } from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const fetchAuthors = () => async dispatch => {
  const res = await instance.get("/api/authors/");
  const authors = res.data;
  dispatch({ type: FETCH_AUTHORS, payload: authors });
};

export const filterAuthors = query => {
  return {
    type: actionTypes.FILTER_AUTHORS,
    payload: query
  };
};
