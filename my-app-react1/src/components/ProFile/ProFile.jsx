import React from "react";
import stl from "./ProFile.module.css"
import PostConteiner from "./post/postСonteiner"
import Info from "./Content/Info";

const ProFile = () => {
   return <div className={stl.content}>
      <Info name='Артур' />
      <PostConteiner />
   </div >
}
export default ProFile;


