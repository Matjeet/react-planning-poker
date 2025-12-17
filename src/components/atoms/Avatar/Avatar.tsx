import './Avatar.scss'

interface Params {
    text?: string
    hasBottomLabel?: boolean
}

export const Avatar = ({text='', hasBottomLabel=true}: Params) => {
    return (
        <div className='container'>
            <div className="avatar">
                <label className='shortName'>{text.substring(0, 2).toUpperCase()}</label>
            </div>
            {hasBottomLabel ? (<label>{text}</label>): <></>}
        </div>
    )
}