import { useCallback, useState } from "react"
import { Menu } from "../components/molecules/Menu"
import { InitialContainer } from "../components/organisms/InitialLayoutContainer"
import { InitialTemplate } from "../components/templates/InitialTemplate"
import { InputValidation } from "../util/Validation"

export const InitialPage = () => {
    const [partyName, setPartyName] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const [errors, setErrors] = useState(false)

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
            console.log("Creating party with name:", partyName)
        }
    }, [partyName, isDisabled])

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