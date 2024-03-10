import React from "react";
import stl from "./ProFile.module.css"
import PostConteiner from "./post/postСonteiner"
import Info from "./Content/Info";

const ProFile = (props) => {
   return <div className={stl.content}>
      <Info profile={props.profile} />
      <PostConteiner />
   </div >
}
export default ProFile;


