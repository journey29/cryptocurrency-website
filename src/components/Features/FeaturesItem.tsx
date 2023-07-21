import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    icon: IconProp,
    text: string,
    title: string
}

export const FeaturesItem: React.FC<Props> = ({ icon, text, title }) => {
    return (
        <div className="flex flex-col items-center text-center my-12 px-7">
            <button className="mb-3">
                <FontAwesomeIcon className="text-global-color-green h-10" icon={icon} />
            </button>
            <h4 className="mb-3 text-2xl font-medium">{title}</h4>
            <p className="text-gray">{text}</p>
        </div>
    )
}
