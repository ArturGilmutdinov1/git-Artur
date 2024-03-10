const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";
const SET_USER_PROFILE = ' SET_USER_PROFILE';

let initialState = {
   postData: [
      { id: 1, message: 'хехех', like: 1 },
      { id: 2, message: 'asdхех', like: 2 },
      { id: 3, message: 'adsasdad', like: 3 },
   ],
   newPostText: "",
   profile: null
}


const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            postData: [...state.postData, {
               id: 5,
               message: state.newPostText,
               like: 0,
            }
            ],
            newPostText: "",
         }
      case UPDATE_NEW_POST:
         return {
            ...state,
            newPostText: action.newText,
         }
      case SET_USER_PROFILE: {
         return { ...state, profile: action.profile }
      }
      default:
         return state;
   }
}


export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })


export default profileReducer;
