import { useState, useEffect, useRef } from 'react'

import './minav.css'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined'

import { useDispatch } from 'react-redux'
import { changeBackground } from '../../features/background/backgroundSlice'
import { toggleCursor } from '../../features/cursor/cursorSlice'

import { RxCursorArrow } from 'react-icons/rx';

const Minav = () => {
    // estado para la barra de configuración
    const [active, setActive] = useState(false)

    // estado para el cursor
    const [enabled, setEnabled] = useState(true)

    // referencia al nav
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
        } else {
            document.exitFullscreen()
        }    
    }

    // cambiar cursor
    const toggleCursor = async () => {
        dispatch(toggleCursor(setEnabled(!enabled)))
    }

    const dispatch = useDispatch()

    const changebg1 = (e) => {
        e.preventDefault()
        dispatch(changeBackground('bg-one'))
    }

    const changebg2 = (e) => {
        e.preventDefault()
        dispatch(changeBackground('bg-two'))
    }

    const changebg3 = (e) => {
        e.preventDefault()
        dispatch(changeBackground('bg-three'))
    }

    const changebg4 = (e) => {
        e.preventDefault()
        dispatch(changeBackground('bg-four'))
    }

    return (
        <div id="minav" ref={nav}>
            <div id="minav-centre">
                <div id="minav-top">
                    <img src="./lockerglogo.png" alt="locker g logo" />

                    <div id="minav-container-options">
                        <div id="themes">
                            <div className='bg-one' onClick={changebg1}></div>
                            <div className='bg-two' onClick={changebg2}></div>
                            <div className='bg-three' onClick={changebg3}></div>
                            <div className='bg-four' onClick={changebg4}></div>
                        </div>
                        <SettingsOutlinedIcon onClick={() => setActive(!active)} className={active ? 'tools settings-active' : 'tools settings-inactive'}/>
                    </div>
                </div>

                <div id="minav-bottom" className={active ? 'minav-bottom-active' : ''}>
                    {/* fullscreen */}
                    <FullscreenOutlinedIcon onClick={handleFullscreen}/>
                    <RxCursorArrow onClick={toggleCursor}/>
                </div>
            </div>
        </div>
    )
}

export default Minav
