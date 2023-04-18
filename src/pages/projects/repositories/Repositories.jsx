import './repositories.css'

import BookOutlinedIcon from '@mui/icons-material/BookOutlined'
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined'
import { useEffect, useState } from 'react'

const Repositories = () => {
    // repositorios github
    const [repos, setRepos] = useState(null)
    
    useEffect(() => {
		fetch(`https://api.github.com/users/donatto22/repos`)
			.then(response => response.json())
			.then(data => setRepos(data));
	}, [])

    return (
        <div id="repo">
            <div id="repo-content">
                <div>Proyectos / Repositorios</div>

                <div id="repositories">
                    {
                        repos?.map(r => (
                            <div id="git-repo" key={r.id}>
                                <div id="repo-name"> <BookOutlinedIcon /> {r.name} </div>
                                <div id="repo-description"> {r.description} </div>

                                <a href={r.html_url} id="repo-btn"> <LaunchOutlinedIcon /> Github</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Repositories
