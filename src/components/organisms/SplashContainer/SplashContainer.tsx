import type { ReactNode } from "react";

interface Params {
    children: ReactNode
    centered?: boolean
}

export const SplashContainer = ({ children, centered = true}: Params) => {
    return (
        <div className={`splash-container ${centered ? 'splash-container--centered' : ''}`}>
            {children}
        </div>
    )
}