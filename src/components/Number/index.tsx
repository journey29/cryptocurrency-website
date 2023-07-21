import { animated, useSpring } from '@react-spring/web'
type Props = {
    n: number
}

export const Number: React.FC<Props> = ({ n }) => {
    const { number } = useSpring({
      from: { number: 0 },
      to: { number: n },
      delay: 500,
      config: { mass: 1, tension: 280, friction: 120 },
    });
  
    return (
      <animated.span className="mr-2 text-lg font-semibold">
        {number.to((value) => value.toFixed(0))}
      </animated.span>
    );
  };