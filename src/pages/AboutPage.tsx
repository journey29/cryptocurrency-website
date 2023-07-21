import { About } from "components/About"
import { Advantage } from "components/Advantage"
import { Breadcrumbs } from "components/Breadcrumbs"
import { Clients } from "components/Clients"
import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { Vision } from "components/Vision"
import { Join } from "components/Join"


export const AboutPage:React.FC = () => {
    return (
        <>
            <Header />
            <Breadcrumbs title="About Us" />
            <About/>
            <Vision/>
            <Advantage/>
            <Clients/>
            <Join/>
            <Footer />
        </>
    )
}

