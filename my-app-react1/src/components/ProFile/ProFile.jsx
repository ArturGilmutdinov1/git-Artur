import React from "react";
import stl from "./ProFile.module.css"
import Post from "./post/post";
import Info from "./Content/Info";

const ProFile = (props) => {

   return <div className={stl.content}>
      <Info name='Артур' />
      <Post postData={props.postData} />
   </div >
}
export default ProFile;