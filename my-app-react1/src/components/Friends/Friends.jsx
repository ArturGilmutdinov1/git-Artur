import React from 'react';
import stl from './Friends.module.css'
import Friend from './friend/friend';

const Friends = (props) => {
   let allfriend = props.peopleDate.map((el) => <Friend name={el.name}></Friend>)
   return <div className={stl.item}>
      {allfriend}
   </div>
}

export default Friends;