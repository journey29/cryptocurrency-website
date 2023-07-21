import Logo from 'assets/images/Logo-Coinary.png'
import { MenuDrawer } from './MenuDrawer'
import { Link } from 'react-router-dom'
import { useSpring, animated} from '@react-spring/web'

export const Header:React.FC = () => {
    const springProps = useSpring({
        from: { x: 1000, opacity:0 },
        to: { x: 0, opacity:1 },
        config:{
            duration:700
        }
      });
    return (
        <animated.header className='flex items-center justify-center gap-36 p-5' style={springProps}>
            <Link to="/">
                <img className='w-40' src={Logo} alt="logo" />
            </Link>
            <nav className='hidden md:block' >
                <ul className='flex items-center gap-10 '>
                    <Link className='hover:text-global-color-green duration-300 ease-in' to="/">Home</Link>
                    <Link className='hover:text-global-color-green duration-300 ease-in' to="/about">About</Link>
                    <Link className='hover:text-global-color-green duration-300 ease-in' to="/our-app">Our App</Link>
                    <li className='header-pages'>
                        <span className='hover:text-global-color-green duration-300 ease-in cursor-pointer'>
                        Pages
                        </span>
                        <ul className='header-pages__list'>
                            <Link className='hover:text-global-color-green duration-300 ease-in' to="/products">Products</Link>
                            <Link className='hover:text-global-color-green duration-300 ease-in' to="/careers">Careers</Link>
                            <Link className='hover:text-global-color-green duration-300 ease-in' to="/career-overview">Careers Overview</Link>
                            <Link className='hover:text-global-color-green duration-300 ease-in' to="/team">Team</Link>
                            <Link className='hover:text-global-color-green duration-300 ease-in' to="/faqs">FAQS</Link>
                            <Link className='hover:text-global-color-green duration-300 ease-in' to="/contact">Contact Us</Link>
                        </ul>
                    </li>
                    <Link className='hover:text-global-color-green duration-300 ease-in' to="/token-sale">Token Sale</Link>
                </ul>
            </nav>
            <button className='bg-white py-2 px-6 text-black hover:bg-global-color-green duration-300 ease-in hidden xl:block'>Download App</button>
            <MenuDrawer/>
        </animated.header>
    )
}
