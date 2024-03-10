import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import musicReducer from "./musicReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
   profillePage: profileReducer,
   dialogPage: dialogReducer,
   friendsPage: usersReducer,
   musicPage: musicReducer,
}
);

let store = createStore(reducers);

window.store = store;

export default store;