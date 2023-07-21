import { AboutTeam } from "components/AboutTeam"
import { Breadcrumbs } from "components/Breadcrumbs"
import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { Join } from "components/Join"
import { Team } from "components/Team"
import { Vision } from "components/Vision"

export const TeamPage: React.FC = () => {
    return (
        <>
            <Header />
            <Breadcrumbs title="Our Team" />
            <Team />
            <Vision />
            <AboutTeam/>
            <Join />
            <Footer />
        </>
    )
}

