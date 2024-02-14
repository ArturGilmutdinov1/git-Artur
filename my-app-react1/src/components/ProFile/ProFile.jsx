import React from "react";
import stl from "./ProFile.module.css"
import PostConteiner from "./post/postСonteiner"
import Info from "./Content/Info";

const ProFile = (props) => {
   return <div className={stl.content}>
      <Info name='Артур' />
      <PostConteiner
         postData={props.postData.postData}
         dispatch={props.dispatch} />
   </div >
}
export default ProFile;