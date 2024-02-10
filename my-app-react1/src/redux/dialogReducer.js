const SEND_MESSAGE = "SEND_MESSAGET"
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE"



const dialogReducer = (state, action) => {
   switch (action.type) {
      case SEND_MESSAGE:
         let newMessage = {
            message: state.newMessageText,
         }
         state.messageData.push(newMessage);
         return state;
      case UPDATE_NEW_MESSAGE:
         state.newMessageText = action.newText;
         return state
      default:
         return state;
   }
}

export const sendMessageActionCreator = () => {
   return { type: SEND_MESSAGE }
}

export const updateNewMessageActionCreator = (text) => {
   return { type: UPDATE_NEW_MESSAGE, newText: text }
}

export default dialogReducer;