import { QuestionItem } from "components/Questions/QuestionItem"
import { useSpring, animated } from '@react-spring/web'

export const Troubles: React.FC = () => {
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
                <div className="flex flex-col items-start text-start gap-7 md:items-center md:text-center ml:flex-row ml:justify-center ml:gap-20">
                    <div>
                        <h4 className="font-semibold text-2xl mb-7">Payments</h4>
                        <div className="flex flex-col gap-5 items-start">
                            <QuestionItem title="How to change my photo from admin dashboard?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
                            <QuestionItem title="How to change my password easily?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
                            <QuestionItem title="How to change my subscription plan?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-2xl mb-7">Troubleshooting</h4>
                        <div className="flex flex-col gap-5 items-start">
                            <QuestionItem title="What sort of APIs does this platform provide?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
                            <QuestionItem title="I can't find a library for C#, Go, etc. What do I do?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
                            <QuestionItem title="I found a bug, what do I do?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
                        </div>
                    </div>
                </div>
            </div>
        </animated.section>
    )
}

