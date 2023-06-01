import { useEffect, useRef, useState } from 'react'
import ScrollReveal from "scrollreveal"

import './projects.css'
import Repositories from './repositories/Repositories'

const Projects = () => {
    const myRef = useRef(null)	

	useEffect(() => {
		ScrollReveal().reveal(myRef.current, {
		  // opciones de configuración aquí
		  duration: 700,
		})
	}, [])

    // repositorios github
    const [repos, setRepos] = useState(null)
    
    useEffect(() => {
		fetch(`https://api.github.com/users/donatto22/repos`)
			.then(response => response.json())
			.then(data => setRepos(data))
	}, [])

    let vivian = []

    return (
        <div id="projects" ref={myRef}>
            <div id="top">
                <a href="https://github.com/donatto22/vivian" target='_blank'>
                    <div className="image-top">
                        <img src="vivian-page.webp" alt="vivian page" />
                    </div>
                </a>

                <a href="https://github.com/donatto22/tousirm-page" target='_blank'>
                    <div className="image-top">
                        <img src="captura.webp" alt="tourism page" />
                    </div>
                </a>
            </div>

            <Repositories repos={repos}/>
        </div>
    )
}

export default Projects
