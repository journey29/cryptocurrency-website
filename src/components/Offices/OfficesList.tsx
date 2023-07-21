import { OfficesItem } from "./OfficesItem"

export const OfficesList:React.FC = () => {
    return (
        <div className="grid grid-cols-1 gap-10 mt-6 md:grid-cols-2 xl:grid-cols-3 md:gap-20">
            <OfficesItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." title="Office 1" email="office1@email.com" phone="(012) 123 456 789" />
            <OfficesItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." title="Office 2" email="office2@email.com" phone="(028) 256 751 203" />
            <OfficesItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." title="Office 3" email="office3@email.com" phone="(098) 789 006 461" />
        </div>
    )
}
