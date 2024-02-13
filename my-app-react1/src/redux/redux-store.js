import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import peopleReducer from "./peopleReducer";

let reducers = combineReducers({
   profillePage: profileReducer,
   dialogPage: dialogReducer,
   friends: peopleReducer,
}
);

let store = createStore(reducers);



export default store;