import type { ReactNode } from "react"
import "./LobbyTemplate.scss"

interface Params {
    children: ReactNode
}

export const LobbyTemplate = ({ children }: Params) => {
    return (
        <div className="lobby-template">
            {children}
        </div>
    )
}