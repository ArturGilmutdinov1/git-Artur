import React from "react";
import stl from "./Header.module.css"
import { NavLink } from "react-router-dom";

const Header = (props) => {

   return <header className={stl.header}>
      <img src='https://www.svgrepo.com/show/396535/fox.svg'></img>
      <div className={stl.login}>
         {props.isAuth ? props.login
            : <NavLink to={'/login'}>войти</NavLink>}
      </div>
   </header>

}
export default Header