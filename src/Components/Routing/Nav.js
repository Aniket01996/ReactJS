import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <h2  className='heading'>Routing</h2>
            <div className='nav'>
                <NavLink className={Nav} to={'/'}>Home</NavLink>
                <NavLink className={Nav} to={'/contact'}>Contact</NavLink>
                <NavLink className={Nav} to={'/about'}>About</NavLink>
            </div>
        </>
    )
}
export default Nav
