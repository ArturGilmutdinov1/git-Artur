import React from "react";
import MyPost from "./MyPost/Mypost";
import stl from "./post.module.css";

const Post = (props) => {

   let AllPosts = props.postData.map((el => <MyPost message={el.message} like={el.like} />))


   return <div className={stl.AreaText}>
      <textarea></textarea>
      {AllPosts}
   </div >
}

export default Post;