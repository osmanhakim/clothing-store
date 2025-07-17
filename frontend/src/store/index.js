import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth";
import UserReducer from "./user";
import CardReducer from "./card";
const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    User: UserReducer,
    Card: CardReducer,
  },
});

export default store;
