import React from 'react'
import Actions from '../actions/Actions';
import Logo from '../logo/Logo';
import Searchbar from '../searchbar/Searchbar';
import './Navbar.css'

const Navbar = ()=>{
    return <div className='navbar'>
        <Logo />
        <Searchbar />
        <Actions />
    </div>
}

export default Navbar;