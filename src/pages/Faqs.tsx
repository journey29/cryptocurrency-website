import { Advantage } from "components/Advantage"
import { Benefits } from "components/Benefits"
import { Breadcrumbs } from "components/Breadcrumbs"
import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { Join } from "components/Join"
import { Troubles } from "components/Troubles"
import { Questions } from "components/Questions"

export const Faqs: React.FC = () => {
    return (
        <>
            <Header />
            <Breadcrumbs title="FAQ's" />
            <Questions/>
            <Benefits/>
            <Troubles/>
            <Advantage/>
            <Join/>
            <Footer />
        </>
    )
}
