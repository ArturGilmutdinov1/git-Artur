import React from "react";
import stl from "./Info.module.css"


const Info = (props) => {
   return <div className={stl.content}>
      <div className={stl.board}>
      </div>
      <div className={stl.content__flex}>
         <div className={stl.photo}>
            <img src='https://gas-kvas.com/uploads/posts/2023-01/1673412252_gas-kvas-com-p-kvadratnie-risunki-anime-6.jpg'></img>
         </div>
         <div className={stl.information}>
            <div className={stl.name}>
               {props.name}
            </div>
            <div className={stl.information__сomplete}>
               date of birg: 2 january
               City: Minsk
               Education: BSU'11
               web site: https://it-kamasutra.com
            </div>
         </div>
      </div>
   </div>
}
export default Info;