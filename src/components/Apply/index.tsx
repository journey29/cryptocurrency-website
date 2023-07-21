import { Description } from "components/Description"
import { ApplyList } from "./ApplyList"

export const Apply: React.FC = () => {
    return (
        <section className="mb-16">
            <div className="container">
                <div className="flex flex-col items-start text-start md:items-center md:text-center">
                    <Description title="Current opportunities" caption="Applying" text="We’re a truly global team with 17 offices around the world." />
                    <ApplyList />
                </div>
            </div>
        </section>
    )
}
