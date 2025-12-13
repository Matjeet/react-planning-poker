import { Icon } from "../../../atoms/Icon"
import PokerChip from '../../../../assets/images/ficha-de-poker 1.svg'
import { Button } from "../../../atoms/Button"
import './PartyHeader.scss'
import { Avatar } from "../../../atoms/Avatar"

interface Params {
    size?: 'medium' | 'large'
    avatarText?: string
    havesAvatar?: boolean
}

export const PartyHeader = ({size = 'medium', avatarText='', havesAvatar=false}: Params) => {
    return (
        <div className="party-container">
            <Icon src={PokerChip} size={size === 'medium' ? 48 : 70} />
            <div className="share-party">
                {havesAvatar ? (<Avatar text={avatarText} hasBottomLabel={false}/>) : (<></>)}
                <Button type='share' label='Invitar jugadores'/>
            </div>
        </div>
    )
}