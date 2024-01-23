import React from "react";
import stl from "./Dialogs.module.css"
import Message from "./Message/Message";
import Contacts from "./Contacts/Contacts";


const Dialogs = (props) => {

   let People = props.dialogData.map((el) => <Contacts name={el.name} id={el.id} />)

   let message = props.messageData.map((el) => <Message message={el.message} />)


   return (
      <div className={stl.content}>
         <div className={stl.dialog}>
            {People}
         </div>
         <div className={stl.message}>
            {message}
         </div>
      </div >
   )
}
export default Dialogs;