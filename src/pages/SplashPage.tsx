import { useEffect } from "react"
import { SplashTemplate } from "../components/templates/SplashTemplate"
import { SplashContainer } from "../components/organisms/SplashContainer"
import { Logo } from "../components/molecules/Logo"

interface Params {
    onLoadingComplete?: () => void
    duration?: number
}

export const SplashPage = ({ onLoadingComplete, duration=3000}: Params) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onLoadingComplete?.()
        }, duration)

        return () => clearTimeout(timer)
    }, [onLoadingComplete, duration])

    return (
        <SplashTemplate>
            <SplashContainer centered={true}>
                <Logo size="large"></Logo>
            </SplashContainer>
        </SplashTemplate>
    )
}