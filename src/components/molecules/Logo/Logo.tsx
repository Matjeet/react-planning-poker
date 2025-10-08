import { Icon } from '../../atoms/Icon'
import PokerChip from '../../../assets/images/ficha-de-poker 1.svg'
import Brand from '../../../assets/images/Pragma-logo.svg'
import './Logo.scss'

interface Params {
    size?: 'medium' | 'large'
}

export const Logo = ({ size = 'medium' }: Params) => {
    return (
        <div className={`logo logo--${size}`}>
            <Icon src={PokerChip} size={size === 'large' ? 70 : 48} className="logo__icon"></Icon>
            <Icon src={Brand} aspectRatio='rectangle' size={size === 'large' ? 100 : 78} className='logo__brand'></Icon>
        </div>
    )
}