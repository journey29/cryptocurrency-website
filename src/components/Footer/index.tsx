import { faPhone, faMailBulk, faClock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom"
import Logo from 'assets/images/Logo-Coinary.png'
import { useSpring, animated } from '@react-spring/web'

export const Footer: React.FC = () => {
  const springProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 700
    }
  })
  return (
    <animated.footer className="mt-auto pb-16" style={springProps}>
      <div className="container">
        <div className="flex flex-col items-center text-center gap-7 mb-10">
          <ul className="grid grid-cols-1 items-center text-center gap-7 sl:grid-cols-2 sl:items-start ml:grid-cols-4">
            <li className="flex flex-col items-center gap-5">
              <img className="w-40" src={Logo} alt="logo" />
              <p className="text-gray text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
              <div>
                <ul className="flex items-center gap-6">
                  <li>
                    <FontAwesomeIcon className="text-global-color-green hover:text-gray duration-300 ease-in" icon={faFacebook} />
                  </li>
                  <li>
                    <FontAwesomeIcon className="text-global-color-green hover:text-gray duration-300 ease-in" icon={faTwitter} />
                  </li>
                  <li>
                    <FontAwesomeIcon className="text-global-color-green hover:text-gray duration-300 ease-in" icon={faYoutube} />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <h6 className="text-xl mb-3">Our Products</h6>
              <ul className="text-gray text-sm flex flex-col gap-3">
                <li>
                  <a href="#">Crypto Earn</a>
                </li>
                <li>
                  <a href="#">Exchanges</a>
                </li>
                <li>
                  <a href="#">DeFi Wallet</a>
                </li>
                <li>
                  <a href="#">Converter</a>
                </li>
              </ul>
            </li>
            <li>
              <h6 className="text-xl mb-3">Pages</h6>
              <ul className="text-gray text-sm flex flex-col gap-3">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="our-app">Our App</Link>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
                <li>
                  <Link to="/token-sale">Token Sale</Link>
                </li>
              </ul>
            </li>
            <li>
              <h6 className="text-xl mb-3">Contact</h6>
              <ul className="flex flex-col items-center gap-4 text-gray text-sm">
                <li className="flex flex-col justify-center gap-3 ml:flex-row">
                  <FontAwesomeIcon className="text-global-color-green hover:text-gray duration-300 ease-in" icon={faPhone} />
                  <a href="tel:+2055550100">(205) 555-0100</a>
                </li>
                <li className="flex flex-col justify-center gap-3 ml:flex-row">
                  <FontAwesomeIcon className="text-global-color-green hover:text-gray duration-300 ease-in" icon={faClock} />
                  <span>Mon - Fri : 9 am - 11 pm</span>
                </li>
                <li className="flex flex-col justify-center gap-3 ml:flex-row">
                  <FontAwesomeIcon className="text-global-color-green hover:text-gray duration-300 ease-in" icon={faMailBulk} />
                  <a href="mailto:email@coinary.com">email@coinary.com</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-3 text-center text-gray text-sm">
          <p>Copyright © 2022 Coinary</p>
          <div className="flex items-center gap-5">
            <p>Help & Support</p> |
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </animated.footer>
  )
}
