import { QuestionItem } from "components/Questions/QuestionItem"
import { useSpring, animated } from '@react-spring/web'

export const Benefits: React.FC = () => {
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
          <h4 className="font-semibold text-3xl mb-7">About Benefits & Supports</h4>
          <div className="flex flex-col gap-5 items-start">
            <QuestionItem title="How to change my photo from admin dashboard?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
            <QuestionItem title="How to change my password easily?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
            <QuestionItem title="How to change my subscription plan?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
          </div>
        </div>
      </div>
    </animated.section>
  )
}
