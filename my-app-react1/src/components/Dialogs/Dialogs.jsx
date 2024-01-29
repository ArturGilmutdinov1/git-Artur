import React from "react";
import stl from "./Dialogs.module.css"
import Message from "./Message/Message";
import Contacts from "./Contacts/Contacts";


const Dialogs = (props) => {

   let People = props.dialogData.map((el) => <Contacts name={el.name} id={el.id} />)
   let message = props.messageData.map((el) => <Message message={el.message} />)

   let newMessageElement = React.createRef();
   let sendAMessage = () => {
      let text = newMessageElement.current.value;
      props.sendMessage(text);

   }

   return (<div className={stl.border}>
      <div className={stl.content}>
         <div className={stl.dialog}>
            {People}
         </div>
         <div className={stl.message}>
            {message}
         </div>
      </div >
      <div>
         <textarea className={stl.text} ref={newMessageElement}></textarea>
         <div>
            <button className={stl.send} onClick={sendAMessage}>отправить</button>
         </div>
      </div>
   </div>
   )
}
export default Dialogs;