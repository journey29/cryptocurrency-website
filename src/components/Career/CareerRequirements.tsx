import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

type Props = {
    text:string
}

export const CareerRequirements:React.FC<Props> = ({text}) => {
    return (
        <li className='flex items-center gap-2'>
            <button className='bg-global-color-green rounded-full h-4 w-4 flex items-center justify-center p-2'>
                <FontAwesomeIcon className='h-3 text-global-color-secondary' icon={faCheck} />
            </button>
            <span>
                {text}
            </span>
        </li>
    )
}
