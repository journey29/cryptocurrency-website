import { QuestionsList } from "./QuestionsList"
import { useSpring, animated } from '@react-spring/web'

export const Questions: React.FC = () => {
    const springProps = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: {
            duration: 1700
        }
    })
    return (
        <animated.section className="mb-16" style={springProps}>
            <div className="container">
                <div className="flex flex-col items-start text-start md:items-center md:text-center">
                    <h4 className="font-semibold text-3xl mb-7">Common Questions</h4>
                    <QuestionsList />
                </div>
            </div>
        </animated.section>
    )
}
