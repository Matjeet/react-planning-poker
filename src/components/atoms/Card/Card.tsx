import './Card.scss'

interface Params {
    cardText?: string
    type: 'user' | 'points'
    bottomLabel?: string
}

export const Card = ({cardText = '', type, bottomLabel = ''}: Params) => {
    return (
        <div className={'card__container'}>
            <div className={`card card--${type}`}>
                <label>{cardText}</label>
            </div>
            <label>{bottomLabel}</label>
        </div>
    )
}