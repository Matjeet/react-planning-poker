import { useState } from "react"
import { PartyFooter } from "../../molecules/Footer"
import { PartyHeader } from "../../molecules/Header"
import { NestedPlanningTable } from "../NestedPlanningTable"
import { ShareModal } from "../ShareModal"
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
    const [isSharedModalOpen, setIsSharedModalOpen] = useState(false)

    const handleClose = () => {
        setIsSharedModalOpen(false)
    }

    const hableOpenSharedModal = () => {
        setIsSharedModalOpen(true)
    }
    return (
        <div className="party-layout">
            {withHeader ? (
                <div className="party-layout__header">
                    <label className="party-layout__label">{partyName}</label>
                    <PartyHeader avatarText={avatarText} havesAvatar={havesAvatar} handleOpenSharedModal={hableOpenSharedModal}/>
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

            <ShareModal isOpen={isSharedModalOpen} handleClose={handleClose}/>
        </div>
    )
}