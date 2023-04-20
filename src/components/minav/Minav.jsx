import { useState, useEffect, useRef } from 'react'

import './minav.css'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined'
import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined'

document.fullsc

const Minav = () => {
    const [active, setActive] = useState(false)

    const nav = useRef(null)

    useEffect(() => {
        if (nav.current)
        document.documentElement.style.setProperty('--minav-height', nav.current.offsetHeight + 'px');
    }, [])

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
        <div id="minav" ref={nav}>
            <div id="minav-centre">
                <div id="minav-top">
                    <img src="./lockerglogo.png" alt="locker g logo" />

                    <div id="minav-container-options">
                        <div id="themes">
                            <div className='bg-one'></div>
                            <div className='bg-two'></div>
                            <div className='bg-three'></div>
                            <div className='bg-four'></div>
                        </div>
                        <SettingsOutlinedIcon onClick={() => setActive(!active)} className={active ? 'tools settings-active' : 'tools settings-inactive'}/>
                    </div>
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
