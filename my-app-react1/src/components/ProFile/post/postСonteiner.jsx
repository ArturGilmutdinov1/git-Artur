import React from "react";
import Post from "./post"
import { addPostActionCreator, updateNewPostActionCreator, } from "../../../redux/profileReducer";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
   return {
      postData: state.profillePage.postData
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      addPost: () => {
         dispatch(addPostActionCreator());
      },
      updateNewPostText: (text) => {
         dispatch(updateNewPostActionCreator(text));
      },
   }
}

const PostConteiner = connect(mapStateToProps, mapDispatchToProps)(Post);

export default PostConteiner;


