import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import "./nav.css"

export const Navbar = () => {
  return (
    <nav>
        <div className='links'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='cart'><ShoppingCart size={32} /></NavLink>
        </div>
    </nav>
  )
}
