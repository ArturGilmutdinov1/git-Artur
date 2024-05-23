import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import imgNut from '../../common/img/nuticon_87878.png';
import stl from "./Info.module.css";
import ProfileStatus from './ProfileStatusThiwHoks';
import SettingForm from './setting';

const Info = (props) => {
   debugger
   let [settings, setSetings] = useState(false)

   if (!props.profile) {
      return < Preloader />
   }

   let interactSetting = () => {
      setSetings(!settings)
   }


   return <div className={stl.content}>
      <div className={stl.board}>
      </div>
      <div className={stl.content__flex}>
         {!props.owner && <div ><img src={imgNut} alt="" className={stl.setting} onClick={interactSetting} />
         </div>}
         <div className={stl.photo}>
            <img src={
               props.profile.photos.small
                  ? props.profile.photos.small
                  : 'https://gas-kvas.com/uploads/posts/2023-01/1673412252_gas-kvas-com-p-kvadratnie-risunki-anime-6.jpg'
            } alt=''></img>
         </div>
         <div className={stl.information}>
            <div className={stl.name}>
               {props.profile.fullName}
            </div>
            <div className={stl.information__сomplete}>
               job:{props.profile.lookingForAJobDescription}
            </div>
            <div>
               <b>contact</b>
            </div>
            <div>
               github:{props.profile.contacts.github}
            </div>
            <div>
               vk:{props.profile.contacts.vk}
            </div>
            <div>
               facebook:{props.profile.contacts.facebook}
            </div>
            about me: <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
         </div>
         {(settings === true)
            ? <SettingForm savePhoto={props.savePhoto} userId={props.userID} saveDataProfile={props.saveDataProfile} setSetings={setSetings} />
            : null
         }
      </div>
   </div >
}
export default Info;