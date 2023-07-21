import { faChevronDown} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    text: string
}

export const AboutTeamItem: React.FC<Props> = ({ text }) => {
    return (
        <li className="flex gap-3 max-w-xl">
            <button className="bg-global-color-secondary rounded-full w-8 h-8">
                <FontAwesomeIcon className="text-global-color-green p-2" icon={faChevronDown} />
            </button>
            <p className=" text-gray">{text}</p>
        </li>
    )
}
