import { AboutTeamItem } from "./AboutTeamItem"

export const AboutTeamList:React.FC = () => {
    return (
        <ul className="flex flex-col gap-5 my-6 max-w-md ">
            <AboutTeamItem text="Suspendisse aliquet urna anteLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcor." />
            <AboutTeamItem text="Curabitur vestibulum urnaLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcor." />
            <AboutTeamItem text="Donec quam felis, ultricies nec pellLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcor." />
        </ul>
    )
}
