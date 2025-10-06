import './Button.scss'

interface Params {
    label: string;
    type?: 'primary' | 'second' | 'planning';
    disabled?: boolean;
    parentMethod?: () => void;
}

export const Button = ({ label, type = 'primary', disabled = false, parentMethod }: Params) => {
    return (
        <button 
            className={`custom-button custom-button--${type} ${disabled ? 'custom-button--disabled' : ''}`}
            disabled={disabled}
            onClick={disabled ? undefined : parentMethod}
        >
            {label}
        </button>
    );
}