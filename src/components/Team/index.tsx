import { useSpring, animated } from '@react-spring/web'
import { TeamList } from './TeamList'

export const Team: React.FC = () => {
    const springProps = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: {
            duration: 1400
        }
    })
    return (
        <animated.section className="mb-16" style={springProps}>
            <div className="container">
                <div className={`flex flex-col items-center text-center gap-4`}>
                    <span className="uppercase text-global-color-green text-sm">Our Team</span>
                    <h2 className="text text-3xl font-semibold">Experienced Expert at Your Service</h2>
                </div>
                <TeamList />
            </div>
        </animated.section>
    )
}

