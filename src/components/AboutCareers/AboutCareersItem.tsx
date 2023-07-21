import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {
    icon: IconProp,
    title: string,
    text: string
}

export const AboutCareersItem: React.FC<Props> = ({ icon, text, title }) => {
    return (
        <div className="flex flex-col items-center text-center gap-4 max-w-md">
            <button className='bg-global-color-secondary rounded-full w-12 h-12 flex items-center justify-center'>
                <FontAwesomeIcon className="text-global-color-green h-5" icon={icon} />
            </button>
            <h4 className="font-semibold text-xl">{title}</h4>
            <p className="text-gray">{text}</p>
        </div>
    )
}

