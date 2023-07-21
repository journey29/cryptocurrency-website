import React from 'react'

type Props = {
    children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ children }) => {
    return (
        <button className='max-w-xs w-full bg-global-color-green text-black font-medium p-3 my-6 duration-300 ease-in hover:bg-white'>{children}</button>
    )
}
