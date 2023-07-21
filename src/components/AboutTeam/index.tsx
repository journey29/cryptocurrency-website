import CryptoCurrency from 'assets/images/team/cryptocurrency-and-business.jpg'
import { useSpring, animated } from '@react-spring/web'
import { AboutTeamList } from './AboutTeamList'

export const AboutTeam: React.FC = () => {
    const springProps = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: {
            duration: 700
        }
    })
    return (
        <animated.section className="mb-16" style={springProps}>
            <div className="container">
                <div className='flex flex-col items-center md:flex-row md:justify-center md:gap-20'>
                    <div>
                        <div className="flex flex-col items-center text-center gap-4 md:items-start md:text-start">
                            <span className="uppercase text-global-color-green text-sm">About Team</span>
                            <h2 className="text-3xl font-semibold">This is how we work</h2>
                        </div>
                        <AboutTeamList />
                    </div>
                    <div className='flex flex-col gap-5 max-w-md'>
                        <img className='max-w-md w-full' src={CryptoCurrency} alt="img" />
                        <p>“The pace of change and velocity of the product force you to pick up new skills, experiment with new tactics.“</p>
                        <div>
                            <p className='font-semibold text-xl mb-2'>Steve Leon</p>
                            <span className='text-gray '>IT Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </animated.section>
    )
}
