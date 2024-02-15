import React from "react";
import Post from "./post"
import { addPostActionCreator, updateNewPostActionCreator, } from "../../../redux/profileReducer";
import StoreContex from "../../../redux/StoreContext";

const PostConteiner = () => {

   debugger

   return (
      <StoreContex.Consumer>
         {
            (store) => {
               let state = store.getState();
               let addPost = () => {
                  store.dispatch(addPostActionCreator());
               }

               let onPostChange = (text) => {
                  store.dispatch(updateNewPostActionCreator(text));
               }

               return <Post
                  addPost={addPost}
                  updateNewPostText={onPostChange}
                  postData={state.profillePage.postData} />

            }
         }
      </StoreContex.Consumer>
   )
}

export default PostConteiner;


