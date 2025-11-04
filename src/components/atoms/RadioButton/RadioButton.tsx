import './RadioButton.scss'

interface Params {
    label: string
    name: string
    value: string
    checked: boolean
    onChange: (value: string) => void
    disabled?: boolean
}

export const RadioButton = ({
    label,
    name,
    value,
    checked,
    onChange,
    disabled = false,
}: Params) => {
    return (
        <label className="radio-button">
            <span className="radio-button__label">{label}</span>
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={() => onChange(value)}
                disabled={disabled}
                className="radio-button__input"
            />
            <span className="radio-button__checkmark"></span>
        </label>
    )
}