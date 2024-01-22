import React from "react";
import MyPost from "./MyPost/Mypost";
import stl from "./post.module.css";

const Post = () => {
   let postData = [
      { id: 1, message: 'хехех', like: 1 },
   ]
   return <div className={stl.AreaText}>
      <textarea></textarea>
      <MyPost message={postData[0].message} like={postData[0].like} />
   </div >
}

export default Post;