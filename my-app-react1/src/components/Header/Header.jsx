import React from "react";
import { NavLink } from "react-router-dom";
import stl from "./Header.module.css";

const Header = (props) => {

   return <header className={stl.header}>
      <img src='https://www.svgrepo.com/show/396535/fox.svg'></img>
      <div className={stl.login}>
         {props.isAuth
            ? <div>{props.login}  <div><button onClick={props.logout}>выйти</button></div></div>
            : <NavLink to={'/login'}>войти</NavLink>}
      </div>
   </header>

}
export default Header