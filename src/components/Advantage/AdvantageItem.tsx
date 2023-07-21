import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    title:string,
    text:string,
    icon:IconProp
}

export const AdvantageItem:React.FC<Props> = ({title, text, icon}) => {
  return (
    <div className="flex flex-col items-center text-center px-6 my-10">
        <button className="mb-3">
            <FontAwesomeIcon className="text-global-color-green h-10" icon={icon}/>
        </button>
        <h4 className="mb-3 text-2xl font-medium">{title}</h4>
        <p className="text-gray">{text}</p>
    </div>
  )
}
