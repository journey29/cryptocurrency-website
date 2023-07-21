import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from 'react'

type Props = {
    text:string,
    title:string
}

export const QuestionItem:React.FC<Props> = ({title, text}) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    return (
        <div className='cursor-pointer'>
            <div className='pb-3 flex items-start justify-between' onClick={()=>setIsActive(!isActive)}>
                <p className={`leading-5 duration-300 ease-in font-semibold ${isActive ? 'text-global-color-green' : 'text-white' } text-lg`}>{title}</p>
                <FontAwesomeIcon className={`py-1 duration-300 ease-in ${isActive ? 'rotate-180 text-global-color-green' : 'rotate-0 text-white'}`} icon={faChevronDown}/>
            </div>
            <div className={`duration-300 text-start ease-in text-gray overflow-hidden ${isActive ? 'max-h-20 opacity-100' : 'opacity-0 max-h-0'}`}>
                {text}
            </div>
        </div>
    )
}
