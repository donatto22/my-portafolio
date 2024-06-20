import { useState, useEffect, useRef, useContext } from "react"
import { NavLink } from "react-router-dom"

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'

import { useSelector } from 'react-redux'

import Minav from '../minav/Minav'

import './nav.css'
import './nav.responsive.css'
import { Context } from "../../Context"

const Nav = ({ children }) => {
	const [user, setUser] = useState(null)
    
    useEffect(() => {
		fetch(`https://api.github.com/users/donatto22`)
			.then(response => response.json())
			.then(data => setUser(data));
	}, [])
    
    const selector = useSelector(state => state.background)

    const { menu } = useContext(Context)

    const navLeft = useRef()

    // if(menu == true) {
        
    //     console.log(navLeft.current.style.width = '10px')
    // } else {
    //     console.log(navLeft.current.style.width = '300px')
    // }

    return (
        <>
        <div id="nav">
            <div id="nav-left" ref={navLeft}>
                <div id="nav-content">
                    <div id="profile">
                        <div id="profile-image">
                            { user && <img src={user.avatar_url} alt="image profile" /> }
                        </div>

                        <div id="profile-name">
                            <h2>Donatto Minaya</h2>
                        </div>

                        <div id="profile-description">
                            <span>Front End Developer</span>
                        </div>
                    </div>

                    <div id="links-nav">
                        <NavLink to='/'><HomeOutlinedIcon/>Inicio</NavLink>
                        <NavLink to='/projects'><FolderOutlinedIcon/>Proyectos</NavLink>
                        <NavLink to='/products'><Inventory2OutlinedIcon/>Productos</NavLink>
                        {/* <NavLink to='/services'><WorkOutlineOutlinedIcon/>Servicios</NavLink> */}
                        {/*<NavLink to='/contact'><PersonOutlineOutlinedIcon/> Contáctame</NavLink> */}
                    </div>
                </div>
            </div>

            <div id="nav-right" className={selector}>
                <Minav/>

                <div id="container">
                    <div id="min-container">
                        { children }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Nav