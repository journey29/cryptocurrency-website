import { ApplyForm } from "components/ApplyForm"
import { Breadcrumbs } from "components/Breadcrumbs"
import { Career } from "components/Career"
import { Footer } from "components/Footer"
import { Header } from "components/Header"

export const CareerOverview = () => {
    return (
        <>
            <Header />
            <Breadcrumbs title="Career Overview" />
            <Career/>
            <ApplyForm/>
            <Footer />
        </>
    )
}

