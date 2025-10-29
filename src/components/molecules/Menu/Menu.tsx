import { Button } from "../../atoms/Button"
import { Input } from "../../atoms/Input"
import './Menu.scss'

interface Params {
    type?: 'start' | 'user'
    inputLabel?: string
    inputClassName?: string
    inputValue?: string
    isRequired?: boolean
    buttonLabel?: string
    isDisabled?: boolean
    isError?: boolean
    parentMethod?: () => void
    onInputChange?: (value: string) => void
}

export const Menu = ({type = 'start', inputLabel = '', isRequired = false, buttonLabel = '', isDisabled = false, parentMethod, onInputChange, inputClassName = 'custom-input--default', inputValue = '', isError = false}: Params) => {

    return (
        <div className={`menu menu--${type}`}>
            <Input label={inputLabel} required = {isRequired} className={inputClassName} onChange={onInputChange} value={inputValue} error={isError}/>
            <Button type="primary" label={buttonLabel} parentMethod={parentMethod} disabled = {isDisabled}/>
        </div>
    )
}