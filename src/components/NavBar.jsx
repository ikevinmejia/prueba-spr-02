import React from 'react'
import { NavLink } from "react-router-dom";
import home from '../assets/svg/home.svg'
import courses from '../assets/svg/courses.svg'
import stats from '../assets/svg/stats.svg'
import user from '../assets/svg/user.svg'

function NavBar() {
  return (
    <>
        <footer className="footer">
        <nav className="nav">
            <ul className="ul">
                <li>
                    <NavLink to='/home' className={({isActive}) => isActive ? 'active' : ''}>
                        <img src={home} alt="home" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'className={({isActive})=> isActive ? 'active' : ''}>
                        <img src={courses} alt="courses" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className={({isActive})=> isActive ? 'active' : ''}>
                        <img src={stats} alt="stats" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className={({isActive})=> isActive ? 'active' : ''}>
                        <img src={user} alt="user" />
                    </NavLink>
                </li>
            </ul>
        </nav>
      </footer>
    </>
  )
}

export default NavBar