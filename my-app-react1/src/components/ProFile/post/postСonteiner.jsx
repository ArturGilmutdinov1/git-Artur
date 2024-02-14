import React from "react";
import Post from "./post"
import { addPostActionCreator, updateNewPostActionCreator, } from "../../../redux/profileReducer";

const PostConteiner = (props) => {

   let addPost = () => {
      props.dispatch(addPostActionCreator());
   }

   let onPostChange = (text) => {
      props.dispatch(updateNewPostActionCreator(text));
   }

   return <Post
      addPost={addPost}
      updateNewPostText={onPostChange}
      postData={props.postData} />
}

export default PostConteiner;