import React from "react";
import { sendMessageActionCreator, updateNewMessageActionCreator } from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";


const DialogsConteiner = (props) => {
   let onSendMessageClick = () => {
      props.dispatch(sendMessageActionCreator());
   }

   let onMessageChange = (textMessage) => {
      props.dispatch(updateNewMessageActionCreator(textMessage));
   }

   return <Dialogs
      updateNewMessageBody={onSendMessageClick}
      sendMessage={onMessageChange}
      dialogData={props.state.dialogPage.dialogData}
      messageData={props.state.dialogPage.messageData} />
}
export default DialogsConteiner;