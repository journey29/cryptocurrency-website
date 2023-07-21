import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {
    title: string,
    text: string,
    icon: IconProp
}

export const AboutItem: React.FC<Props> = ({ title, text, icon }) => {
    return (
        <div className="flex flex-col items-center text-center my-6 md:my-10 px-3">
            <button className='w-14 h-14 bg-global-color-secondary rounded-full mb-3 flex items-center justify-center'>
                <FontAwesomeIcon className='h-5 text-global-color-green' icon={icon} />
            </button>
            <h4 className='font-medium text-2xl mb-3'>{title}</h4>
            <p className='text-gray'>{text}</p>
        </div>
    )
}
