import { combineReducers } from "@reduxjs/toolkit";
import newArrivals from "./newArrivals";
import current from "./current";

export default combineReducers({
  newArrivals,
  current,
});

export * from "./newArrivals";
export * from "./current";
