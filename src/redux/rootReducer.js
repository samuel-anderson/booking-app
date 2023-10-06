import { combineReducers } from "@reduxjs/toolkit";
import stepReducer from "../features/step/stepSlice";

const rootReducer = combineReducers({
  step: stepReducer,
});

export default rootReducer;
