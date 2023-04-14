import { useState, useEffect } from 'react'

import './minav.css'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined'
import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined'

document.fullsc

const Minav = () => {
    const [active, setActive] = useState(false)

    // Habilitar fullscreen
    const handleFullscreen = async () => {
        const bool = document.fullscreenElement
        console.log(bool)
        // inactivo
        if (!bool) {
            await document.body.requestFullscreen() // activar
            setEnabled(!enabled)
        } else {
            document.exitFullscreen()
            setEnabled(!enabled)
        }    
    }

    return (
        <div id="minav">
            <div id="minav-centre">
                <div id="minav-top">
                    <img src="./lockerglogo.png" alt="locker g logo" />
                    <SettingsOutlinedIcon onClick={() => setActive(!active)} className={active ? 'tools settings-active' : 'tools settings-inactive'}/>
                </div>

                <div id="minav-bottom" className={active ? 'minav-bottom-active' : ''}>
                    {/* fullscreen */}
                    <FullscreenOutlinedIcon onClick={handleFullscreen}/>
                </div>
            </div>
        </div>
    )
}

export default Minav
