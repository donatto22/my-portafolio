import { useEffect, useRef, useState } from 'react'
import ScrollReveal from "scrollreveal";

import './projects.css'
import Repositories from './repositories/Repositories';
import Toprepo from './toprepo/Toprepo';

const Projects = () => {
    const myRef = useRef(null)	

	useEffect(() => {
		ScrollReveal().reveal(myRef.current, {
		  // opciones de configuración aquí
		  duration: 700
		})
	}, [])

    // repositorios github
    const [repos, setRepos] = useState(null)
    
    useEffect(() => {
		fetch(`https://api.github.com/users/donatto22/repos`)
			.then(response => response.json())
			.then(data => setRepos(data));
	}, [])

    let vivian = []

    return (
        <div id="projects" ref={myRef}>
            <div id="top">
                {
                    repos &&
                    (() => {
                        const targetRepo = (id) => { return repos.find(repo => repo.id === id) }// vivian
                        return (
                            <Toprepo targetRepo={targetRepo(380901585)} /> // vivian
                        )
                    })()
                }
            </div>

            <Repositories repos={repos}/>
        </div>
    )
}

export default Projects
