import React from "react";
import Info from "./Content/Info";
import stl from "./ProFile.module.css";
import PostConteiner from "./post/postСonteiner";

const ProFile = (props) => {
   return <div className={stl.content}>
      <Info profile={props.profile} status={props.status} updateStatus={props.updateStatus} userID={props.authorizedUserID} savePhoto={props.savePhoto} saveDataProfile={props.saveDataProfile} />
      <PostConteiner />
   </div >
}
export default ProFile;


