const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";


let initialState = {
   postData: [
      { id: 1, message: 'хехех', like: 1 },
      { id: 2, message: 'asdхех', like: 2 },
      { id: 3, message: 'adsasdad', like: 3 },
   ],
   newPostText: "",
}


const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 5,
            message: state.newPostText,
            like: 0,
         };
         state.postData.push(newPost);
         return state;
      case UPDATE_NEW_POST:
         state.newPostText = action.newText;
         return state;
      default:
         return state;
   }
}

export const addPostActionCreator = () => {
   return { type: ADD_POST }
}

export const updateNewPostActionCreator = (text) => {
   return { type: UPDATE_NEW_POST, newText: text }
}

export default profileReducer;