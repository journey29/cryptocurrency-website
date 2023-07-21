
type Props = {
    quantity:string,
    text:string
}

export const VisionItem:React.FC<Props> = ({quantity, text}) => {
  return (
    <div>
        <p className="text-global-color-green font-semibold text-3xl mb-3">{quantity}</p>
        <p className="text-gray text-xs">{text}</p>
    </div>
  )
}
