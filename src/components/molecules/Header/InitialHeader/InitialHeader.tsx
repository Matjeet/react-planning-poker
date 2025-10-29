import { Icon } from '../../../atoms/Icon'
import PokerChip from '../../../../assets/images/ficha-de-poker 1.svg'
import './InitialHeader.scss'

interface Params {
    title?: string
    logoSize?: 'medium' | 'large'
}

export const InitialHeader = ({ title = '', logoSize='medium'}: Params) => {
    return (
        <header className={'initial-header'}>
            <Icon src={PokerChip} size={logoSize == 'medium' ? 48 : 70} />
            <h1 className="initial-header__title">{title}</h1>
        </header>
    )
}