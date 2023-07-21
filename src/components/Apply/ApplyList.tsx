import { ApplyItem } from "./ApplyItem"

export const ApplyList:React.FC = () => {
    return (
        <table className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 xl:grid-cols-4">
            <ApplyItem task="Responsible for pipeline and build system." job="Ruby Engineer" field="Engenner" location="Los Angeles" />
            <ApplyItem task="Managing operations and testing for improved stability." job="Reliability Engineer" field="Consulting" location="Washington" />
            <ApplyItem task="Responsible for pipeline and build system." job="Javascript Prototyper" field="Product" location="San Francisc" />
            <ApplyItem task="Help us with any odds and ends that need tackling." job="Junior PHP Engineer" field="Consulting" location="Washington" />
        </table>
    )
}
