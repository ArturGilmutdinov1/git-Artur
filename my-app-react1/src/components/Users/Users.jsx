import React from "react";
import stl from './Users.module.css'
import { NavLink } from "react-router-dom";

const Users = (props) => {
   //let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= 10; i++) {
      pages.push(i);
   };

   return <div >
      <div>
         {pages.map(p => {
            return <span className={props.currentPage === p && stl.selectedPage}
               onClick={(e) => { props.onPageChanged(p) }}
            > {p}</span>
         })}
      </div>

      {props.peopleDate.map(users => <div key={users.id}  >
         <div className={stl.conteiner}>
            <div>
               <NavLink to={'/proFile/' + users.id}>
                  <img src={users.photos.small != null ? users.photos.small : "https://4x4photo.ru/wp-content/uploads/2023/08/91fdb41a-bd83-4993-b9ce-7ec0e34d35a9.jpg"} alt="" className={stl.userPhoto} />
               </NavLink>
            </div>
            <div>{users.name}</div>
            <div>{users.status}</div>
            <div>{'users.location.country'}</div>
            <div>{'users.location.city'}</div>
         </div>
         <div className={stl.button}>
            {users.followed
               ? <button onClick={() => { props.unfollow(users.id); }}>удалить</button>
               : <button onClick={() => { props.follow(users.id) }}>добавить</button>
            }

         </div>
      </div>
      )
      }
   </div >
}

export default Users;