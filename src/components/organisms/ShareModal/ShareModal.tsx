import { Button } from "../../atoms/Button"
import { Input } from "../../atoms/Input"
import './ShareModal.scss'

interface Params {
    isOpen: boolean
    handleClose?: () => void
}

export const ShareModal = ({isOpen = false, handleClose}: Params) => {
    const shareLink = "http://localhost:5173/lobby"

    if(!isOpen) return null

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareLink)
        if(handleClose) {
            handleClose()
        }
    }

    return (
        <div className='share-modal'>
            <div className='share-modal-header'>
                <h3>Invitar jugadores</h3>
                <button className='share-modal-close-button' onClick={handleClose}>X</button>
            </div>
            <div className='share-modal-content'>
                <Input value={shareLink} className="custom-input--shared"/>
                <Button label="Copiar link" parentMethod={handleCopyLink}/>
            </div>
        </div>
    )
}