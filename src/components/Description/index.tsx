import { useSpring, animated } from '@react-spring/web'

type Props = {
    title:string,
    text:string,
    caption:string,
    textCenter?:boolean
}

export const Description:React.FC<Props> = ({title, text, caption}) => {
     const springProps = useSpring({
        from: { y: 30, opacity: 0 },
        to: { y: 0, opacity: 1 },
        config: {
            duration: 500
        }
    })

  return (
    <animated.div className='flex flex-col gap-4 max-w-lg w-full' style={springProps}>
        <span className="uppercase text-global-color-green">{caption}</span>
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className="text-gray text-xs ml:text-base">{text}</p>
    </animated.div>
  )
}
