import React, {useState} from 'react'

import '../Css/Navbar.css'

export const Navbar = (props) => {

    

    return (
        <div className='app__navbar'>
            <div className='app__navbar-left'>
                <div className='app__navbar-logo'>T</div>
                <div className='app__navbar-name'>The Calculator</div>
            </div>
            <div className='app__navbar-right'>
                <button className='app__navbar-dropbtn' onClick={props.onclick}>Theme: {(props.lightTheme)?"Light":"Dark"}</button>
                <div className='app__navbar-drop'></div>
            </div>
        </div>
    )
}
