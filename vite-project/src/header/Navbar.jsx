import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './navvar.module.css';
function Navbar() {
  return (
    <>
      <nav className={style.nav}>
        <NavLink className={style.NavLink} to={'/'}>
          home
        </NavLink>
        <NavLink className={style.NavLink} to={'/addBook'}>
          addWorkList
        </NavLink>
        <NavLink className={style.NavLink} to={'/showBook'}>
          showWorkList
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
