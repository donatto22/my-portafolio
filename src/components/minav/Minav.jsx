import { useState, useEffect, useRef } from 'react'

// modal de informacion del repo
import InfoModal from '../infomodal/InfoModal'

// Estilos e iconos
import './minav.css'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { BsFullscreen, BsInfoCircle } from 'react-icons/bs'
import { RxCursorArrow } from 'react-icons/rx'

// Redux
import { useDispatch } from 'react-redux'
import { changeBackground } from '../../features/background/backgroundSlice'
import { toggleCursor } from '../../features/cursor/cursorSlice'

// alternar fullscreen
import { handleFullscreen } from './handleFullscreen'

// Portal para mostrar el modal de información del portafolio
import { createPortal } from 'react-dom'


const Minav = () => {
    // estado para la barra de configuración
    const [active, setActive] = useState(false)

    // estado para el cursor
    const [enabled, setEnabled] = useState(true)

    // estado para el modal
    const [modalActive, setModalActive] = useState(false)

    // referencia al nav
    const nav = useRef(null)

    useEffect(() => {
        if (nav.current)
        document.documentElement.style.setProperty('--minav-height', nav.current.offsetHeight + 'px');
    }, [])

    const dispatch = useDispatch()

    // cambiar el fondo según el que se le pida
    const changebg = (bgclass) => {
        dispatch(changeBackground(bgclass))
    }

    // cambiar cursor
    const handleCursor = async () => {
        setEnabled(!enabled) // deshabilitando

        // si está habilitado, entonces deshabilitar
        if(enabled) dispatch(toggleCursor(false))
        else dispatch(toggleCursor(true))
    }

    // alternar modal
    const openModal = (boolean) => {
        if (boolean) {
            setModalActive(true) // muestra el modal
        } else setModalActive(false) // cierra el modal
    }


    return (
        <div id="minav" ref={nav}>
            <div id="minav-centre">
                <div id="minav-top">
                    <img src="./lockerglogo.png" alt="locker g logo" />

                    <div id="minav-container-options">
                        <div id="themes">
                            <div className='bg-one' onClick={() => {changebg('bg-one')}}></div>
                            <div className='bg-two' onClick={() => {changebg('bg-two')}}></div>
                            <div className='bg-three' onClick={() => {changebg('bg-three')}}></div>
                            <div className='bg-four' onClick={() => {changebg('bg-four')}}></div>
                        </div>
                        <SettingsOutlinedIcon onClick={() => setActive(!active)} className={active ? 'tools settings-active' : 'tools settings-inactive'}/>
                    </div>
                </div>

                <div id="minav-bottom" className={active ? 'minav-bottom-active' : ''}>
                    {/* fullscreen */}
                    <BsFullscreen onClick={handleFullscreen} title='Pantalla completa'/>
                    <RxCursorArrow onClick={handleCursor} title='Alternar cursor'/>
                    {/* <BsInfoCircle title='Acerca del portafolio' onClick={() => { openModal(true) }}/> */}
                    {/* { modalActive && createPortal(<InfoModal closeModalFunction={ () => { openModal(false) } }/>, document.querySelector('#infoModal')) } */}
                </div>
            </div>
        </div>
    )
}

export default Minav
