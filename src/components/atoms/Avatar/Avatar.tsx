import './Avatar.scss'

interface Params {
    text?: string
}

export const Avatar = ({text=''}: Params) => {
    return (
        <div className="avatar">
            <label>{text}</label>
        </div>
    )
}