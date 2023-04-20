import { useState, useEffect, useRef } from 'react'

import './minav.css'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined'

import { useSelector, useDispatch } from 'react-redux'
import { changeBackground } from '../../features/background/backgroundSlice'

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

    const dispatch = useDispatch()
    const selector = useSelector(state => state.background)

    const changebg1 = (e) => {
        e.preventDefault()
        dispatch(changeBackground('bg-one'))
        console.log(selector)
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
                </div>
            </div>
        </div>
    )
}

export default Minav
