import './toprepo.css'

const Toprepo = ({ targetRepo }) => {
    return (
        <div className="top-repo">
            <h2>{targetRepo.name}</h2>
            <p>{targetRepo.description}</p>
        </div>
    )
}

export default Toprepo
