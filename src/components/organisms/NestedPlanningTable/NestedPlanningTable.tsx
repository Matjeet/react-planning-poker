import { Avatar } from '../../atoms/Avatar';
import { Button } from '../../atoms/Button';
import { PlanningTable } from '../../atoms/PlanningTable';
import './NestedPlanningTable.scss';

interface Player {
    id: string
    name: string
}

interface Params {
    isActiveButton: boolean
    handleScoreReveal?: () => void
    players?: Player[]
}

export const NestedPlanningTable = ({
    isActiveButton, 
    handleScoreReveal,
    players = []
}:Params) => {
    return (
        <div className="nested-planning-table">
            <div className='planning-table-container'>
                <div className='table-stack'>
                    <PlanningTable size='large'>
                        <PlanningTable size='medium'>
                            <PlanningTable size='small'>
                                {isActiveButton ? (
                                    <Button 
                                        type='planning' 
                                        label='Revelar cartas' 
                                        parentMethod={handleScoreReveal}
                                    />
                                ) : (<></>)}
                            </PlanningTable>
                        </PlanningTable>
                    </PlanningTable>
                </div>
                    {players.map((p, i) => (
                        <div
                            key={p.id}
                            className={`player-position player-position--${i}`}
                        >
                            <p>{i}</p>
                            <Avatar 
                                text={p.name}
                            />
                        </div>
                    ))}
            </div>
        </div>
    )
}