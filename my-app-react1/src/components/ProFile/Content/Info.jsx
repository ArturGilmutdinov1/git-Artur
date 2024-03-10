import React from "react";
import stl from "./Info.module.css"
import Preloader from "../../common/Preloader/Preloader";


const Info = (props) => {

   if (!props.profile) {
      return < Preloader />
   }

   return <div className={stl.content}>
      <div className={stl.board}>
      </div>
      <div className={stl.content__flex}>
         <div className={stl.photo}>
            <img src={
               props.profile.photos.small
                  ? props.profile.photos.small
                  : 'https://gas-kvas.com/uploads/posts/2023-01/1673412252_gas-kvas-com-p-kvadratnie-risunki-anime-6.jpg'
            }></img>
         </div>
         <div className={stl.information}>
            <div className={stl.name}>
               {props.profile.fullName}
            </div>
            <div className={stl.information__сomplete}>
               aboutMe:{props.profile.aboutMe}
            </div>
         </div>
      </div>
   </div>
}
export default Info;