import { CareerRequirements } from './CareerRequirements'

export const CareerRequirementsList: React.FC = () => {
    return (
        <ul className='mt-4 flex flex-col gap-4'>
            <CareerRequirements text='Energized to join a startup' />
        </ul>
    )
}
