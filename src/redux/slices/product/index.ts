import { combineReducers } from "@reduxjs/toolkit";
import newArrivals from "./newArrivals";

export default combineReducers({
  newArrivals,
});

export * from "./newArrivals";
