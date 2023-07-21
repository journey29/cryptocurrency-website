import { Breadcrumbs } from "components/Breadcrumbs"
import { Discover } from "components/Discover"
import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { Market } from "components/Market"
import { Track } from "components/Track"
import { Payment } from "components/Payment"
import { About } from "components/About"
import { Download } from "components/Download"

export const OurApp:React.FC = () => {
  return (
    <>
    <Header/>
    <Breadcrumbs title="Our App"/>
    <Discover/>
    <Market/>
    <Track/>
    <Payment/>
    <About/>
    <Download/>
    <Footer/>
    </>
  )
}
