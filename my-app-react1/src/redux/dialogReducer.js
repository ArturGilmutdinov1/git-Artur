const SEND_MESSAGE = "SEND_MESSAGET"
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE"

let initialState = {
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
}

const dialogReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE:
         return {
            ...state,
            messageData: [...state.messageData, { message: state.newMessageText }],
            newMessageText: "",
         }
      case UPDATE_NEW_MESSAGE:
         return {
            ...state,
            newMessageText: action.newText,
         }
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