import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Description } from "components/Description"

export const Track: React.FC = () => {
    return (
        <section className='mb-16'>
            <div className="container">
                <div className="flex flex-col items-start text-start sl:items-center sl:text-center">
                    <Description title="Track in real time" text="TRACK 250+ CRYPTOS Track in real time Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo." caption="Track 250+ Cryptos" />
                    <div className="mt-6">
                        <ul className="flex flex-col gap-5">
                            <li className="flex items-center gap-3">
                                <FontAwesomeIcon className="text-global-color-green h-3" icon={faCheck} />
                                <span className="text-gray text-xs">Benefit id est laborum et dolorum</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FontAwesomeIcon className="text-global-color-green h-3" icon={faCheck} />
                                <span className="text-gray text-xs">Officia deserunt mollit anim id</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FontAwesomeIcon className="text-global-color-green h-3" icon={faCheck} />
                                <span className="text-gray text-xs">Molestiae consequatur, vel illum</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FontAwesomeIcon className="text-global-color-green h-3" icon={faCheck} />
                                <span className="text-gray text-xs">Fugiat quo voluptas nulla pariatur</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
