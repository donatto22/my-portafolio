import { useEffect, useRef, useState } from 'react'
import ScrollReveal from "scrollreveal";

import './projects.css'
import Repositories from './repositories/Repositories';

const Projects = () => {
    const myRef = useRef(null)	

	useEffect(() => {
		ScrollReveal().reveal(myRef.current, {
		  // opciones de configuración aquí
		  duration: 700
		})
	}, [])

    return (
        <div id="projects" ref={myRef}>
            <div id="top">
                2
            </div>

            <Repositories/>
        </div>
    )
}

export default Projects
