import { useState, useEffect, useRef, useContext } from 'react'

// modal de informacion del repo
import InfoModal from '../infomodal/InfoModal'

// Estilos e iconos
import './minav.css'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { BsFullscreen } from 'react-icons/bs'
import { RxCursorArrow } from 'react-icons/rx'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

// Redux
import { useDispatch } from 'react-redux'
import { changeBackground } from '../../features/background/backgroundSlice'
import { toggleCursor } from '../../features/cursor/cursorSlice'
import { toggleGlass } from "../../features/glassmorphism/glassmorphismSlice"


// alternar fullscreen
import { handleFullscreen } from './handleFullscreen'

// Portal para mostrar el modal de información del portafolio
import { createPortal } from 'react-dom'

// toggle menu
import { Context } from '../../Context'


const Minav = () => {
    // estado para la barra de configuración
    const [active, setActive] = useState(false)

    // estado para el cursor
    const [enabled, setEnabled] = useState(true)

    // estado para el modal
    const [modalActive, setModalActive] = useState(false)

    // referencia al nav
    const nav = useRef(null)

    // toggle menu
    const { menu, setMenu } = useContext(Context)

    useEffect(() => {
        if (nav.current)
        document.documentElement.style.setProperty('--minav-height', nav.current.offsetHeight + 'px');
    }, [])

    const dispatch = useDispatch()

    // cambiar el fondo según el que se le pida
    const changebg = (bgclass) => {
        dispatch(changeBackground(bgclass))
    }

    // cambiar el color de fondo los divs
    const changeglass = (gclass) => {
        dispatch(toggleGlass(gclass))
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
                    <div id="minav-logo">
                        <img src="./lockerglogo.png" alt="locker g logo"/>
                        <MenuOutlinedIcon onClick={() => { setMenu(!menu) }}/>
                    </div>

                    <div id="minav-container-options">
                        <div id="themes">
                            <div className='bg-one' onClick={() => {changebg('bg-one'); changeglass('black-g')}}></div>
                            {/* <div className='bg-two' onClick={() => { 
                                changebg('bg-two'); changeglass('black-g'); changeTextColor('')
                            }}></div> */}
                            <div className='bg-three' onClick={() => {changebg('bg-three'); changeglass('white-g')}}></div>
                            <div className='bg-four' onClick={() => {changebg('bg-four'); changeglass('white-g')}}></div>
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
