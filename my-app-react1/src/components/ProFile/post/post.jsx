import React from "react";
import MyPost from "./MyPost/Mypost";
import stl from "./post.module.css";

const Post = (props) => {

   let newPostElement = React.createRef();
   
   let publishPost = () => {
      let text = newPostElement.current.value;
      props.addPost(text);
      newPostElement.current.value = "";
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPost(text);
   }

   let AllPosts = props.postData.map((el => <MyPost message={el.message} like={el.like} />))


   return <div className={stl.AreaText}>
      <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      <button onClick={publishPost}>отправить</button>
      {AllPosts}
   </div >
}

export default Post;