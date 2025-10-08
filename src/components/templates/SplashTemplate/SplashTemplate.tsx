import type { ReactNode } from "react";

interface Params {
    children: ReactNode
    backgroundColor?: string
}

export const SplashTemplate = ({ children, backgroundColor = 'transparent' }: Params) => {
    return (
        <div className="splash-template" style={{ backgroundColor }}>
            {children}
        </div>
    )
}