import { PartyFooter } from "../../molecules/Footer"
import { PartyHeader } from "../../molecules/Header"
import { NestedPlanningTable } from "../NestedPlanningTable"
import './PartyLayoutContainer.scss'

interface Params {
    withHeader?: boolean
    withFooter?: boolean
    partyName?: string
    isActiveButton?: boolean
    avatarText?: string
    havesAvatar?: boolean
}

export const PartyLayoutContainer = ({withHeader = true, withFooter = true, partyName='', isActiveButton=false, avatarText='', havesAvatar=false}: Params) => {
    return (
        <div className="party-layout">
            {withHeader ? (
                <div className="party-layout__header">
                    <label className="party-layout__label">{partyName}</label>
                    <PartyHeader avatarText={avatarText} havesAvatar={havesAvatar}/>
                </div>
            ) : (<></>)}
            <main className="party-layout__content">
                <NestedPlanningTable isActiveButton={isActiveButton} />
            </main>
            {withFooter ? (
                <footer className="party-layout__footer">
                    <PartyFooter />
                </footer>
            ) : (<></>)}
        </div>
    )
}