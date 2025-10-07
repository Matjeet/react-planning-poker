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
}

export const Input = ({
  type = 'text',
  placeholder = '',
  value = '',
  disable = false,
  error = false,
  success = false,
  onChange,
  className = ''
}: Params) => {

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
    <input
      type={type}
      className={getInputClasses()}
      placeholder={placeholder}
      value={value}
      disabled={disable}
      onChange={handleChange}
    />
  )
}
