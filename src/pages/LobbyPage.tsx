import { useLocation } from "react-router-dom"
import { AdminModal } from "../components/organisms/AdminModal"
import { PartyLayoutContainer } from "../components/organisms/PartyLayoutContainer"
import { LobbyTemplate } from "../components/templates/LobbyTemplate"

export const LobbyPage = () => {
    const location = useLocation()
    const state = location.state as { partyName: string }
    const lo = state?.partyName || ''

    return (
        <LobbyTemplate>
            <AdminModal isOpen={true} partyName={lo}></AdminModal>
            <PartyLayoutContainer />
        </LobbyTemplate>
    )
}