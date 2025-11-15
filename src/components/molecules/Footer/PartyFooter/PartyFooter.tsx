import { Card } from "../../../atoms/Card"
import './PartyFooter.scss'

export const PartyFooter = () => {
    const fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]


    return (
        <div className="party-footer">
            <label>Elige una carta 👇</label>
            <div className="party-footer__cards">
                <div className="party-footer__cards">
                    {fibonacci.map((number) => (
                        <Card type="points" cardText={number.toString()}/>
                    ))}
                </div>
                <div className="party-footer__cards">
                    <Card type="points" cardText="?"/>
                    <Card type="points" cardText="☕"/>
                </div>
            </div>
        </div>
    )
}