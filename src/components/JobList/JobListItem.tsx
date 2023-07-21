import { faArrowRight, faClock, faLocation } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    title: string,
    text: string,
    employment: string,
    location: string
}

export const JobListItem: React.FC<Props> = ({ title, text, employment, location }) => {
    return (
        <div className="flex flex-col items-center text-center gap-5 max-w-md">
            <h4 className="font-semibold text-xl">{title}</h4>
            <p className="text-gray text-sm">{text}</p>
            <div className="flex items-center gap-5 mb-3">
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon className="text-global-color-green h-3" icon={faClock} />
                    <p className="text-sm">{employment}</p>
                </div>
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon className="text-global-color-green h-3" icon={faLocation} />
                    <p className="text-sm">{location}</p>
                </div>
            </div>
            <a className="text-sm font-semibold flex items-center gap-3 text-global-color-green" href="#">
                Apply now
                <FontAwesomeIcon className="h-3" icon={faArrowRight} />
            </a>
        </div>
    )
}
