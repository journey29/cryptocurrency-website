import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faLocation } from "@fortawesome/free-solid-svg-icons"

type Props = {
    job:string,
    task:string,
    field:string,
    location:string
}

export const ApplyItem:React.FC<Props> = ({job, task, field, location}) => {
    return (
        <tr className="pb-5 flex flex-col gap-3 border-b border-gray md:items-center md:text-center">
            <td className="flex flex-col gap-3">
                <h4 className="font-semibold text-lg">{job}</h4>
                <p className="text-sm text-gray">{task}</p>
            </td>
            <td>
                <span className="text-sm text-gray">{field}</span>
            </td>
            <td className="flex items-center">
                <button className="bg-global-color-secondary rounded-full w-5 h-5 flex items-center justify-center mr-2 p-3">
                    <FontAwesomeIcon className="text-global-color-green h-3" icon={faLocation} />
                </button>
                <span className="text-sm text-gray">{location}</span>
            </td>
            <td className="flex items-center gap-2 text-global-color-green">
                <a className=" font-medium text-sm" href="#">
                    Apply
                </a>
                <FontAwesomeIcon className="h-3" icon={faArrowRight} />
            </td>
        </tr>
    )
}
