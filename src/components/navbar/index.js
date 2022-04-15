import React from 'react';
import {Link, NavLink} from 'react-router-dom'
// import './navbar.scss';

// import '../../index.scss'
function NavBar(){
  const data = [
    ['', 'design'],
    ['strategy','Strategy'],
    ['cases', 'cases'],
    ['about','about'],
    ['why-work-with-us', 'why work with us?'],
    ['work-with-us', 'Let\'s work together' ]
  ];
  const addClass = ({isActive})=>{ return isActive?"active-link navbar__link":"navbar__link"}
  const NavLinks = [];
  for(let item of data){
    const link = <NavLink className={addClass} to={item[0]} key={item[0]}>{item[1]}</NavLink>;
    NavLinks.push(link);
  }

  
  return (
    <nav className='navbar'>
      <div className="content__wrapper">
        <Link to="" className='logo'>Ollie</Link>
        <div className="navbar__list">
          {NavLinks}
        </div>
      </div>
    </nav>
  )
}


export default NavBar;