import React from "react";
import MyPost from "./MyPost/Mypost";
import stl from "./post.module.css";

const Post = (props) => {
   let newPostElement = React.createRef();

   let publishPost = () => {
      props.addPost();
      newPostElement.current.value = "";
   }

   let onPostChange = () => {
      let textPost = newPostElement.current.value;
      props.updateNewPostText(textPost);
   }

   let AllPosts = props.postData.map((el => <MyPost message={el.message} like={el.like} />))

   return <div className={stl.AreaText}>
      <textarea onChange={onPostChange} ref={newPostElement} />
      <button onClick={publishPost}>отправить</button>
      {AllPosts}
   </div >
}

export default Post;