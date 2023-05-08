import './repositories.css'

import BookOutlinedIcon from '@mui/icons-material/BookOutlined'
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined'

const Repositories = ({ repos }) => {
    return (
        <div id="repo" className='black-g'>
            <div id="repo-content">
                <div>Proyectos / Repositorios</div>

                <div id="repositories">
                    {
                        repos?.map(r => (
                            <div id="git-repo" key={r.id}>
                                <div id="repo-name"> <BookOutlinedIcon /> {r.name} </div>
                                <div id="repo-description"> {r.description} </div>

                                <div id="repo-link-language">
                                    <a href={r.html_url} id="repo-btn" title='Ver repositorio'> <LaunchOutlinedIcon /> Github</a>
                                    <div id='repo-language'>{r.language}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Repositories
