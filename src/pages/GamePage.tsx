import { useLocation } from "react-router-dom"

export const GamePage = () => {
    const location = useLocation()
    const state = location.state as { partyName: string }
    const lo = state?.partyName || ''

    return (
        <div>{lo}</div>
    )
}