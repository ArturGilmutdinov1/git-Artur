import React from "react";
import stl from "./ProFile.module.css"
import Post from "./post/post";
import Info from "./Content/Info";

const ProFile = () => {
   return <div className={stl.content}>
      <Info name='Артур' />
      <Post />
   </div >
}
export default ProFile;