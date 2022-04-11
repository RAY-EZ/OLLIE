import React from 'react';
import {Link, NavLink} from 'react-router-dom'
// import './navbar.scss';
// import '../../index.scss'
function NavBar(){
  return (
    <nav>
        <Link to="" className='logo'>Ollie</Link>
        <div>
          <NavLink className={({isActive})=>{ return isActive?"active-link":""}} to="">Design</NavLink>
          <NavLink className={({isActive})=>{ return isActive?"active-link":""}} to="strategy">Strategy</NavLink>
          <NavLink className={({isActive})=>{ return isActive?"active-link":""}} to="cases">Cases</NavLink>
          <NavLink className={({isActive})=>{ return isActive?"active-link":""}} to="about">About</NavLink>
          <NavLink className={({isActive})=>{ return isActive?"active-link":""}} to="Why-work-with-us">Why work with us?</NavLink>
        </div>
        <NavLink className={({isActive})=>{ return isActive?"active-link":""}} to="work-withus">Let's work together</NavLink>
    </nav>
  )
}

export default NavBar;