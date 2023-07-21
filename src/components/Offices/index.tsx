import { Overview } from "components/Overview"
import { OfficesList } from "./OfficesList"

export const Offices: React.FC = () => {
  return (
    <section className="mb-16">
      <div className="container">
        <div className="flex flex-col items-start text-start md:items-center md:text-center">
          <Overview caption="Offices" title="Our Head Offices" />
          <OfficesList />
        </div>
      </div>
    </section>
  )
}
