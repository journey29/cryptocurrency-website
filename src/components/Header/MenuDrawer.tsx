import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown, faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Link } from "react-router-dom";

export const MenuDrawer:React.FC = () => {
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const [pagesActive, setPagesActive] = useState<boolean>(false);
    
    return (
        <div className='block md:hidden'>
            <button onClick={() => setMenuActive(!menuActive)}>
                <FontAwesomeIcon className='text-global-color-green h-6' icon={faBars} />
            </button>
            <div className={`bg-black fixed w-full h-full top-0 left-0 bg-opacity-75 duration-500 ease-in z-10 ${menuActive ? 'opacity-1 visible pointer-event-all' : 'opacity-0 invisible pointer-events-none'}`} onClick={() => setMenuActive(false)}>
                <div className={`flex flex-col gap-8 items-start bg-global-color-secondary p-7 w-96 h-full duration-500 ease-in ${menuActive ? 'translate-x-0' : '-translate-x-96'}`} onClick={e => e.stopPropagation()}>
                    <button onClick={() => setMenuActive(false)}>
                        <FontAwesomeIcon className='text-global-color-green h-6' icon={faClose} />
                    </button>
                    <nav>
                        <ul className='flex flex-col items-start gap-8'>
                            <li className='hover:text-global-color-green duration-300 ease-in'>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li className='hover:text-global-color-green duration-300 ease-in'>
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                            <li className='hover:text-global-color-green duration-300 ease-in'>
                                <Link to="/our-app">
                                    Our App
                                </Link>
                            </li>
                            <li>
                                <span className='hover:text-global-color-green duration-300 ease-in flex items-center gap-2' onClick={() => setPagesActive(!pagesActive)}>
                                    Pages
                                    <FontAwesomeIcon className="h-3" icon={faArrowDown} />
                                </span>
                                <ul className={`flex flex-col items-start gap-3 text-sm ${pagesActive ? 'visible pointer-events-auto max-h-52 p-3 pl-0' : 'invisible pointer-events-none max-h-0 p-0'}`}>
                                    <li>
                                        <Link to="/products">
                                            Products
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/careers">
                                            Carrers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/career-overview">
                                            Careers Overview
                                        </Link>
                                        </li>
                                    <li>
                                        <Link to="/team">
                                            Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/faqs">
                                            FAQS
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className='hover:text-global-color-green duration-300 ease-in'>
                                <Link to="/token-sale">Token Sale</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
