import { useCallback, useState } from "react"
import { Menu } from "../components/molecules/Menu"
import { InitialContainer } from "../components/organisms/InitialLayoutContainer"
import { InitialTemplate } from "../components/templates/InitialTemplate"

export const InitialPage = () => {
    const [partyName, setPartyName] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const [errors, setErrors] = useState(false)

    const validatePartyName = useCallback((name: string) => {
        if (name.length < 5 || name.length > 20) {
            return false
        }

        const specialCharsRegex = /[_,.*#\/\-]/
        if (specialCharsRegex.test(name)) {
            return false
        }

        const numbers = name.replace(/[^0-9]/g, '')
        if (numbers.length > 3) {
            return false
        }

        if(/^\d+$/.test(name)) {
            return false
        }

        return true
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