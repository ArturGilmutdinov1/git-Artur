import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import peopleReducer from "./peopleReducer";
import musicReducer from "./musicReducer";

let reducers = combineReducers({
   profillePage: profileReducer,
   dialogPage: dialogReducer,
   friendsPage: peopleReducer,
   musicPage: musicReducer,
}
);

let store = createStore(reducers);



export default store;