import { combineReducers } from "redux";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import CounterReducer from "./counter/counter-reducer";

//Whitelist means which data we want to store in local storage
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["counter"],
};

const rootReducer = combineReducers({
  counter: CounterReducer,
});

export default persistReducer(persistConfig, rootReducer);
