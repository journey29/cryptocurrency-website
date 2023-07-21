import { useSpring, animated } from '@react-spring/web'

type Props = {
    title: string,
    caption: string,
}

export const Overview: React.FC<Props> = ({ title, caption }) => {
    const springProps = useSpring({
        from: { y: 30, opacity: 0 },
        to: { y: 0, opacity: 1 },
        config: {
            duration: 500
        }
    })
    return (
        <animated.div className="flex flex-col gap-4 mb-5" style={springProps}>
            <span className="uppercase text-global-color-green">{caption}</span>
            <h2 className="text text-3xl font-semibold">{title}</h2>
        </animated.div>
    )
}

