import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    title:string,
    text:string,
    icon:IconProp
}

export const ProductsItem:React.FC<Props> = ({title, text, icon}) => {
  return (
    <div className="flex flex-col items-center text-center gap-4 max-w-md">
        <FontAwesomeIcon className="text-global-color-green h-10" icon={icon}/>
        <h4 className="font-semibold text-2xl">{title}</h4>
        <p className="text-gray text-xs">{text}</p>
        <a className="text-global-color-green flex items-center gap-3 font-medium text-sm" href="#">
            Learn More
            <FontAwesomeIcon className="h-3" icon={faArrowRight}/>
        </a>
    </div>
  )
}

