import { useLocation } from 'react-router-dom'
import { PartyLayoutContainer } from '../components/organisms/PartyLayoutContainer'
import usePresence from '../shared/hooks/usePresence'

export const SpectatorPage = () => {
    const location = useLocation()
    const state = location.state as { userName: string }
    const userName = state?.userName || ''
    const partyName = localStorage.getItem('partyName') || ''

    const { players } = usePresence(userName)

    const shortUserName = userName.substring(0, 2).toUpperCase()

    return (
        <>
            <PartyLayoutContainer
                withFooter={false}
                partyName={partyName}
                havesAvatar={true}
                avatarText={shortUserName}
                players={players}
            />
        </>
    )
}