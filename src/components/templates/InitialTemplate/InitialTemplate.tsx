import type { ReactNode } from "react";
import './InitialTemplate.scss'

interface Params {
    children: ReactNode
    backgroundColor?: string
}

export const InitialTemplate = ({ children, backgroundColor = 'transparent' }: Params) => {
    return (
        <div className="initial-template" style={{ backgroundColor }}>
            {children}
        </div>
    )
}