import React from "react";
import { sendMessageActionCreator, updateNewMessageActionCreator } from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
   return {
      dialogData: state.dialogPage.dialogData,
      messageData: state.dialogPage.messageData,
   }
};

let mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessageBody: () => {
         dispatch(sendMessageActionCreator());
      },
      sendMessage: (textMessage) => {
         dispatch(updateNewMessageActionCreator(textMessage));
      }
   }
};

const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsConteiner;