import { PartyFooter } from "../../molecules/Footer"
import { PartyHeader } from "../../molecules/Header"
import { NestedPlanningTable } from "../NestedPlanningTable"
import './PartyLayoutContainer.scss'

interface Player {
    id: string
    name: string
}

interface Params {
    withHeader?: boolean
    withFooter?: boolean
    partyName?: string
    isActiveButton?: boolean
    avatarText?: string
    havesAvatar?: boolean
    players?: Player[]
}

export const PartyLayoutContainer = ({
    withHeader = true, 
    withFooter = true, 
    partyName='', 
    isActiveButton=false, 
    avatarText='', 
    havesAvatar=false,
    players = []
}: Params) => {
    return (
        <div className="party-layout">
            {withHeader ? (
                <div className="party-layout__header">
                    <label className="party-layout__label">{partyName}</label>
                    <PartyHeader avatarText={avatarText} havesAvatar={havesAvatar}/>
                </div>
            ) : (<></>)}
            <main className="party-layout__content">
                <NestedPlanningTable isActiveButton={isActiveButton} players={players}/>
            </main>
            {withFooter ? (
                <footer className="party-layout__footer">
                    <PartyFooter />
                </footer>
            ) : (<></>)}
        </div>
    )
}