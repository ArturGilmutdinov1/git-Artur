import React from "react";
import stl from "./Dialogs.module.css"
import Message from "./Message/Message";
import Contacts from "./Contacts/Contacts";


const Dialogs = () => {

   let dialogData = [
      { id: 1, name: 'Артур' },
      { id: 2, name: 'Вадим' },
      { id: 3, name: 'Айдар' },
      { id: 4, name: 'Петя' },
      { id: 5, name: 'Митя' },
   ]
   let People = dialogData.map((el) => <Contacts name={el.name} id={el.id} />)

   let messageData = [
      { message: 'привет' },
      { message: 'здравствуй ' },
      { message: 'кек' },
      { message: 'чебурек' },
      { message: 'мек-мек' },
   ]
   let message = messageData.map((el) => <Message message={el.message} />)


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