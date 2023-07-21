import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {
    icon: IconProp,
    title: string,
    text: string,
}

export const StepsItem: React.FC<Props> = ({ title, text, icon }) => {
    return (
        <div className="flex flex-col items-center text-center my-10 px-6">
            <button className='mb-3'>
                <FontAwesomeIcon className='text-global-color-green h-10' icon={icon} />
            </button>
            <h4 className='font-medium text-2xl mb-3'>{title}</h4>
            <p className='text-gray mb-5'>{text}</p>
            <button className='text-global-color-green font-medium translate-y-0 hover:-translate-y-1 duration-300 ease-in'>
                <span className='mr-3 text-sm'>Learn More</span>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    )
}
