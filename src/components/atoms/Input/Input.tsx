import type { ChangeEvent } from 'react'
import './Input.scss'

interface Params {
  type?: 'text'
  placeholder?: string
  value?: string
  disable?: boolean
  error?: boolean
  success?: boolean
  onChange?: (value: string) => void
  className?: string
  label?: string
  id?: string
  required?: boolean
}

export const Input = ({
  type = 'text',
  placeholder = '',
  value = '',
  disable = false,
  error = false,
  success = false,
  onChange,
  className = '',
  label = '',
  id = '',
  required = false
}: Params) => {

  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange && !disable) {
      onChange(event.target.value)
    }
  }

  const getInputClasses = () => {
    const classes = ['custom-input']

    if (error) classes.push('custom-input--error')
    if (success) classes.push('custom-input--success')
    if (className) classes.push(className)

    return classes.join(' ')
  }

  return(
    <div className="input-wrapper">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}

      <input
        type={type}
        className={getInputClasses()}
        placeholder={placeholder}
        value={value}
        disabled={disable}
        onChange={handleChange}
      />
    </div>
  )
}
