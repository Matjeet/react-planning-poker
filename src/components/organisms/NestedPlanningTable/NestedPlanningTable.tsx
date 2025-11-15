import { Button } from '../../atoms/Button';
import { PlanningTable } from '../../atoms/PlanningTable';

interface Params {
    isActiveButton: boolean
    handleScoreReveal?: () => void
}

export const NestedPlanningTable = ({isActiveButton, handleScoreReveal}:Params) => {
    return (
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
    )
}