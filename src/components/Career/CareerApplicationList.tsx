import { CareerApplication } from './CareerApplication'

export const CareerApplicationList: React.FC = () => {
    return (
        <ul className='mt-4 flex flex-col gap-4'>
            <CareerApplication text='Energized to join a startup' />
            <CareerApplication text='Energized to join a startup' />
            <CareerApplication text='Energized to join a startup' />
        </ul>
    )
}
