const SEND_MESSAGE = "SEND_MESSAGET"
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE"
const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST = " UPDATE_NEW_POST"


let store = {
   _state: {
      profillePage: {
         postData: [
            { id: 1, message: 'хехех', like: 1 },
            { id: 2, message: 'asdхех', like: 2 },
            { id: 3, message: 'adsasdad', like: 3 },
         ],
         newPostText: "",
      },
      dialogPage: {
         dialogData: [
            { id: 1, name: 'Артур' },
            { id: 2, name: 'Вадим' },
            { id: 3, name: 'Айдар' },
            { id: 4, name: 'Петя' },
            { id: 5, name: 'Митя' },
         ],
         messageData: [
            { message: 'привет' },
            { message: 'здравствуй ' },
            { message: 'кек' },
            { message: 'чебурек' },
            { message: 'мек-мек' },
         ],
         newMessageText: "",
      },
      friends: {
         people: [
            { id: 1, name: 'Артур' },
            { id: 2, name: 'Вадим' },
            { id: 3, name: 'Айдар' },
            { id: 4, name: 'Петя' },
            { id: 5, name: 'Митя' },
         ],
      },
   },
   _rerenderEntireTree() {
      console.log("keke");
   },
   subscribe(observer) {
      this._rerenderEntireTree = observer;
   },
   getState() {
      return this._state;
   },

   dispatch(action) {
      if (action.type === SEND_MESSAGE) {
         let newMessage = {
            message: this._state.profillePage.newPostText,
         }
         this._state.dialogPage.messageData.push(newMessage);
         this._rerenderEntireTree(this._state);
      } else if (action.type === UPDATE_NEW_MESSAGE) {
         this._state.profillePage.newPostText = action.newText;
         this._rerenderEntireTree(this._state);
      } else if (action.type === ADD_POST) {
         let newPost = {
            id: 5,
            message: this._state.dialogPage.newMessageText,
            like: 0,
         };
         this._state.profillePage.postData.push(newPost);
         this._rerenderEntireTree(this._state);
      } else if (action.type === UPDATE_NEW_POST) {
         this._state.dialogPage.newMessageText = action.newText;
         this._rerenderEntireTree(this._state);
      }
   }

}


export const sendMessageActionCreator = () => {
   return { type: SEND_MESSAGE }
}

export const updateNewMessageActionCreator = (text) => {
   return { type: UPDATE_NEW_MESSAGE, newText: text }
}

export const addPostActionCreator = () => {
   return { type: ADD_POST }
}

export const updateNewPostActionCreator = (text) => {
   return { type: UPDATE_NEW_POST, newText: text }
}



export default store;
