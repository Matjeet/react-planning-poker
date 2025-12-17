import { AdminModal } from "../components/organisms/AdminModal"
import { PartyLayoutContainer } from "../components/organisms/PartyLayoutContainer"
import { LobbyTemplate } from "../components/templates/LobbyTemplate"

export const LobbyPage = () => {
    return (
        <LobbyTemplate>
            <AdminModal isOpen={true}></AdminModal>
            <PartyLayoutContainer />
        </LobbyTemplate>
    )
}