import { useCallback, useState } from "react"
import { Menu } from "../components/molecules/Menu"
import { InitialContainer } from "../components/organisms/InitialLayoutContainer"
import { InitialTemplate } from "../components/templates/InitialTemplate"
import { InputValidation } from "../util/Validation"
import { useNavigate } from "react-router-dom"

export const InitialPage = () => {
    const [partyName, setPartyName] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const [errors, setErrors] = useState(false)
    const navigate = useNavigate()

    const validatePartyName = useCallback((name: string) => {
        return InputValidation(name)
    }, [])

    const handleInputChange = useCallback((value: string) => {
        setPartyName(value)
        setIsDisabled(!validatePartyName(value))
        setErrors(!validatePartyName(value))
    }, [validatePartyName])

    const handleSubmit = useCallback(() => {
        if (!isDisabled) {
            localStorage.setItem('partyName', partyName)
            navigate('/lobby')
        }
    }, [partyName, isDisabled, navigate])

    return (
        <InitialTemplate>
            <InitialContainer headerTitle="Crear partida">
                <Menu 
                    inputLabel="Nombra la partida" 
                    buttonLabel="Crear partida" 
                    isDisabled={isDisabled} 
                    onInputChange={handleInputChange} 
                    parentMethod={handleSubmit} 
                    inputValue={partyName}
                    isError={errors}
                />
            </InitialContainer>
        </InitialTemplate>
    )
}