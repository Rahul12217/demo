import userReducer from "./user";
import searchReducer from "./Search";
import {configureStore} from '@reduxjs/toolkit';


export const store = configureStore({
  reducer : {
    user : userReducer,
    search: searchReducer,
  },
  });