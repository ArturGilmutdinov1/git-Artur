import React from 'react';
import stl from './Friends.module.css'



const Friends = (props) => {

   return (
      <div>
         {props.peopleDate.map(users => <div key={users.id}>
            <div>
               <img src={users.photoUrl} alt="" className={stl.userPhoto} />
            </div>
            <div>{users.fullName}</div>
            <div>{users.status}</div>
            <div>{users.location.country}</div>
            <div>{users.location.city}</div>
            <div>
               {users.followed
                  ? <button onClick={() => { props.unfollow(users.id); }}>удалить</button>
                  : <button onClick={() => { props.follow(users.id) }}>добавить</button>
               }
            </div>
         </div>
         )}
      </div>
   )
}
export default Friends;