import './infomodal.css'

const InfoModal = ({ closeModalFunction }) => {
    return (
        <div id="container-modal">
            <button id="closeModal" onClick={ closeModalFunction }>&times;</button>

            <div id="modal">
                
            </div>
        </div>
    )
}

export default InfoModal
