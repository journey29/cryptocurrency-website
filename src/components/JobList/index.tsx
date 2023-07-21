import { Description } from "components/Description"
import { useSpring, animated } from '@react-spring/web'
import { JobItemList } from "./JobItemList"

export const JobList: React.FC = () => {
  const springProps = useSpring({
    from: { x: 1000, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config: {
      duration: 700
    }
  })

  return (
    <animated.section className="mb-16" style={springProps}>
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <Description title="The most needed right now" caption="Job List" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." textCenter={true} />
          <JobItemList />
        </div>
      </div>
    </animated.section>
  )
}

