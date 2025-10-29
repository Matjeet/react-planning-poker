import type { ReactNode } from "react"
import { InitialHeader } from "../../molecules/Header"
import './InitialContainer.scss'

interface Params {
    children?: ReactNode
    headerTitle?: string
}

export const InitialContainer = ({children, headerTitle = ''}: Params) => {
    return (
        <div className="initial-layout">
            <div className="initial-header">
                <InitialHeader title={headerTitle}/>
            </div>
            <main className="initial-layout__content">
                {children}
            </main>
        </div>
    )
}