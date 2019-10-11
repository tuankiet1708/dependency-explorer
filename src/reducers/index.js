import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { localizeReducer as localize } from 'react-localize-redux';
import session from "./session";
import apiCalls from "./apiCalls";

export default combineReducers({
  form: formReducer,
  session,
  localize,
  apiCalls
});
