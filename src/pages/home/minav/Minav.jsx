import { useState } from 'react'

import './minav.css'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

const Minav = () => {
    const [active, setActive] = useState(false)
    
    return (
        <div id="minav">
            <div id="minav-centre">
                <div id="minav-top">
                    <img src="./lockerglogo.png" alt="locker g logo" />
                    <MenuOutlinedIcon onClick={() => setActive(!active)}/>
                </div>

                <div id="minav-bottom" className={active ? 'minav-active' : ''}>
                    <a href="#about"> <InfoOutlinedIcon/>Acerca</a>
                    <a href="#proyects"> <FolderOutlinedIcon/> Proyectos</a>
                    <a href="#proyects"> <PersonOutlineOutlinedIcon/> Contáctame</a>
                </div>
            </div>
        </div>
    )
}

export default Minav
