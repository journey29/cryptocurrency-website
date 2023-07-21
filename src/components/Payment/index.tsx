import { Description } from "components/Description"
import { Button } from "components/UI/Button"
import Card from 'assets/images/cards-1-768x898.png'
import { useSpring, animated } from '@react-spring/web'

export const Payment: React.FC = () => {
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
        <div className="flex flex-col items-center text-center ml:flex-row ml:justify-center ml:gap-20">
          <div className="flex flex-col items-center text-center ml:items-start ml:text-start">
            <Description title="Pay with our card" caption="Crypto Card" text="Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo." textCenter={false} />
            <Button>
              Learn More
            </Button>
          </div>
          <div>
            <img className="w-52" src={Card} alt="img" />
          </div>
        </div>
      </div>
    </animated.section>
  )
}
