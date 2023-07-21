import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    name:string,
    imgSrc:string,
    position:string
}

export const TeamItem:React.FC<Props> = ({name, imgSrc, position}) => {
  return (
    <div className="flex flex-col items-center gap-3 mt-10">
        <img className="w-56 duration-200 ease-in  hover:scale-90" src={imgSrc} alt="img" />
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="text-xs text-gray">{position}</p>
        <div className="flex items-center justify-center gap-3">
            <a className="bg-global-color-secondary rounded-full h-9 w-9 flex justify-center items-center" href="#">
                <FontAwesomeIcon className="text-global-color-green" icon={faFacebook}/>
            </a>
            <a className="bg-global-color-secondary rounded-full h-9 w-9 flex justify-center items-center" href="#">
                <FontAwesomeIcon className="text-global-color-green" icon={faTwitter}/>
            </a>
            <a className="bg-global-color-secondary rounded-full h-9 w-9 flex justify-center items-center" href="#">
                <FontAwesomeIcon className="text-global-color-green" icon={faLinkedin}/>
            </a>
        </div>
    </div>
  )
}
