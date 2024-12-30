import React from 'react'
import style from './Header.module.css';
import { NavLink } from 'react-router';


export default function Header() {
  return (
    <header className={style.header}>
        <section className={style.logo}>
        <h2>Happy New Year</h2>
        <h1>2025</h1>
        </section>
        <nav className={style.menu}>
            <div className={style.navButton}>
                <NavLink 
                    to="/" 
                    end 
                    className={({ isActive }) => isActive ? style.active : undefined}
                >
                    Game
                </NavLink>
            </div>
            <div className={style.navButton}>
                <NavLink 
                    to="/members" 
                    end 
                    className={({ isActive }) => isActive ? style.active : undefined}
                >
                    Members
                </NavLink>
            </div>
        </nav>
    </header>
  )
}
