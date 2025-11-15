import type { ReactNode } from "react"
import "./PlanningTable.scss"

interface Params {
    children: ReactNode
    size?: 'small' | 'medium' | 'large'
}

export const PlanningTable = ({children, size}: Params) => {
    return (
        <div
            className={`planning-table planning-table--${size}`}
        >
            <div className="planning-table__content">
                {children}
            </div>
        </div>
    )
}