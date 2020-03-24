import { combineReducers } from "redux";

import authorReducer from "./redux/reducers/author";
import authorsReducer from "./redux/reducers/authors";

const rootReducer = combineReducers({
  rootAuthor: authorReducer,
  rootAuthors: authorsReducer
});

export default rootReducer;
