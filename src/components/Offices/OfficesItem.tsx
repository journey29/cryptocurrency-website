import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {
    title: string,
    text: string,
    email: string,
    phone: string
}

export const OfficesItem: React.FC<Props> = ({ text, title, email, phone }) => {
    return (
        <div className='flex flex-col items-start md:items-center gap-4'>
            <div className='max-w-md w-full'>
                <h4 className='font-semibold text-xl mb-4'>{title}</h4>
                <p className=' text-gray'>{text}</p>
            </div>
            <div className='flex flex-col items-start gap-5 text-global-color-green md:flex-row md:items-center'>
                <a className='flex items-center gap-2' href="#">
                    <FontAwesomeIcon className='text-xs' icon={faMailBulk} />
                    <span className=' text-white'>{email}</span>
                </a>
                <a className='flex items-center gap-2' href="#">
                    <FontAwesomeIcon className='text-xs' icon={faPhone} />
                    <span className=' text-white'>{phone}</span>
                </a>
            </div>
        </div>
    )
}
