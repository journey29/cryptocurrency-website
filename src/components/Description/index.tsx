import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

type Props = {
  title: string;
  text: string;
  caption: string;
  textCenter?: boolean;
};

export const Description: React.FC<Props> = ({ title, text, caption }) => {
  const [inViewRef, inView] = useInView({
    threshold: 0.7,
  });

  const springProps = useSpring({
    from: { y: 30, opacity: 0 },
    to: { y: inView ? 0 : 30, opacity: inView ? 1 : 0 },
    config: {
      duration: 500,
    },
  });

  return (
    <animated.div ref={inViewRef} className="flex flex-col gap-4 max-w-lg w-full" style={springProps}>
      <span className="uppercase text-global-color-green">{caption}</span>
      <h2 className="text-4xl font-semibold">{title}</h2>
      <p className="text-gray text-xs ml:text-base">{text}</p>
    </animated.div>
  );
};