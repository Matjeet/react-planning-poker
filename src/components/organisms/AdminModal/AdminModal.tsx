import { Input } from "../../atoms/Input";
import { RadioButton } from "../../atoms/RadioButton/RadioButton";
import { Button } from "../../atoms/Button";
import { useCallback, useState } from "react";
import "./AdminModal.scss"
import { InputValidation } from "../../../util/Validation";
import { useNavigate } from "react-router-dom";

interface Params {
    isOpen: boolean
    partyName: string
}

export const AdminModal = ({
    isOpen,
    partyName
}: Params) => {
    const [username, setUsername] = useState('')
    const [role, setRole] = useState<'player' | 'spectator'>('player')
    const [isDisabled, setIsDisabled] = useState(true)
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleConfirm = () => {
        if (username.trim() && role) {

            const userData = {
                userName: username.trim(),
                role,
                partyName
            }

            if(role === 'player') {
                navigate('/game-room', { state: userData })
            }
            else {
                navigate('/spectator-room', { state: userData })
            }
        }
    }

    const validateUserName = useCallback((name: string) => {
        return InputValidation(name)
    }, [])

    const handleInputChange = useCallback((value: string) => {
        setUsername(value)
        setIsDisabled(!validateUserName(value))
        setError(!validateUserName(value))
    }, [validateUserName])

    if(!isOpen) return null

    return (
        <div className="modal-overlay">
            <div className="player-role-modal">
                <div className="player-role-modal__content">
                    <Input
                        label="Tu nombre"
                        value={username}
                        onChange={handleInputChange}
                        className="custom-intput--default"
                        error={error}
                    />

                    <div className="player-role-modal__radio-group">
                        <RadioButton 
                            label="Jugador" 
                            name="role" 
                            value="player" 
                            checked={role === 'player'} 
                            onChange={() => setRole('player')}
                        />
                        <RadioButton 
                            label="Espectador"
                            name="role"
                            value="spectator"
                            checked={role === 'spectator'}
                            onChange={() => setRole('spectator')}
                        />
                    </div>
                </div>
                <div className="player-role-modal__footer">
                    <Button
                        label="Continuar" 
                        type="second"
                        parentMethod={handleConfirm}
                        disabled={isDisabled}
                    />
                </div>
            </div>
        </div>
    )
}