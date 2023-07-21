import { JobListItem } from "./JobListItem"

export const JobItemList:React.FC = () => {
    return (
        <div className="grid grid-cols-1 gap-20 mt-10 md:grid-cols-2 xl:grid-cols-4">
            <JobListItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." title="Frontend Dev" location="Onsite" employment="Full Time" />
            <JobListItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." title="Backend Dev" location="Onsite" employment="Full Time" />
            <JobListItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." title="Graphic Designer" location="Onsite" employment="Full Time" />
            <JobListItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." title="Marketing" location="Onsite" employment="Full Time" />
            <JobListItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." title="Accountant" location="Onsite" employment="Full Time" />
            <JobListItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." title="IT Support" location="Onsite" employment="Full Time" />
        </div>
    )
}
