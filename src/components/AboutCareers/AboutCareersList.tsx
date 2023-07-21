import { faHandshake, faSmile, faStar, faWallet } from "@fortawesome/free-solid-svg-icons"
import { AboutCareersItem } from "./AboutCareersItem"

export const AboutCareersList:React.FC = () => {
    return (
        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 xl:grid-cols-4">
            <AboutCareersItem icon={faStar} title="Working Benefit" text="Lorem ipsum dolor sit amet, consectetur adipiscin." />
            <AboutCareersItem icon={faSmile} title="Happier Weekdays" text="Lorem ipsum dolor sit amet, consectetur adipiscin." />
            <AboutCareersItem icon={faHandshake} title="Good Culture" text="Lorem ipsum dolor sit amet, consectetur adipiscin." />
            <AboutCareersItem icon={faWallet} title="High Sallary" text="Lorem ipsum dolor sit amet, consectetur adipiscin." />
        </div>
    )
}

