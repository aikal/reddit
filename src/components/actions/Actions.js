import React from 'react'
import Button from '../button/Button';
import './Actions.css'
import PersonIcon from '@material-ui/icons/Person'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

const Actions = ()=>{
    return <div className='actions'>
        <Button secondary label="Log In"/>
        <Button  label="Sign Up"/>
        <div className='profile'>
            <PersonIcon/>
            <ArrowDropDownIcon/>
        </div>

    </div>
}

export default Actions;